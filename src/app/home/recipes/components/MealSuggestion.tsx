"use client";

import { MealCard } from "./MealCard";
import { useEffect, useState } from "react";
import type { MealSuggestionType } from "./MealSuggestion.types";
import { RecipeModal } from "./RecipeModal";

// Helper functions for localStorage
const LOCAL_MEALS_KEY = "mealSuggestions";

const MOCK_MEALS: MealSuggestionType[] = [
  {
    id: 1,
    title: "Mock Chicken Pasta",
    image: "https://via.placeholder.com/312x231?text=Chicken+Pasta",
    imagehigher:
      "https://via.placeholder.com/636x393?text=Chicken+Pasta+HighRes",
    usedIngredients: ["chicken", "pasta"],
    missedIngredients: ["tomato sauce", "cheese"],
    description: "A delicious mock chicken pasta meal.",
    readyInMinutes: 30,
    servings: 4,
    fullIngredients: [
      "2 pieces chicken breast",
      "200g pasta",
      "1 cup tomato sauce",
      "100g cheese",
    ],
  },
  {
    id: 2,
    title: "Mock Veggie Stir Fry",
    image: "https://via.placeholder.com/312x231?text=Veggie+Stir+Fry",
    imagehigher:
      "https://via.placeholder.com/636x393?text=Veggie+Stir+Fry+HighRes",
    usedIngredients: ["broccoli", "carrots"],
    missedIngredients: ["soy sauce", "tofu"],
    description: "A tasty mock veggie stir fry.",
    readyInMinutes: 20,
    servings: 2,
    fullIngredients: [
      "1 head broccoli",
      "2 pieces carrots",
      "2 tbsp soy sauce",
      "200g tofu",
    ],
  },
];

export const MealSuggestion = ({
  userIngredients,
}: {
  userIngredients: string[];
}) => {
  const [mealSuggestions, setMealSuggestions] = useState<MealSuggestionType[]>(
    []
  );

  const [useMockFallback, setUseMockFallback] = useState(false);

  const [selectedMeal, setSelectedMeal] = useState<MealSuggestionType | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCAL_MEALS_KEY);
      if (saved) setMealSuggestions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_MEALS_KEY, JSON.stringify(mealSuggestions));
  }, [mealSuggestions]);

  useEffect(() => {
    if (userIngredients.length === 0) return;

    const key = `${LOCAL_MEALS_KEY}_${userIngredients.sort().join(",")}`;
    const cached = localStorage.getItem(key);

    if (cached) {
      setMealSuggestions(JSON.parse(cached));
      return;
    }

    const fetchRecipes = async () => {
      if (useMockFallback) {
        setMealSuggestions(MOCK_MEALS);
        return;
      }
      try {
        const ingredientsQuery = userIngredients.join(",");
        const findUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&ingredients=${ingredientsQuery}&number=5`;

        const findRes = await fetch(findUrl);
        if (!findRes.ok) {
          if (findRes.status === 402 || findRes.status === 429) {
            setUseMockFallback(true);
            setMealSuggestions(MOCK_MEALS);
            alert("API limit reached. Switching to mock meal suggestions.");
            return;
          }
          throw new Error("API error");
        }
        const recipes = await findRes.json();

        const detailedRecipes = await Promise.all(
          recipes.map(
            async (recipe: {
              id: number;
              title: string;
              image: string;
              usedIngredients: { name: string }[];
              missedIngredients: { name: string }[];
            }) => {
              const detailRes = await fetch(
                `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
              );
              if (!detailRes.ok) {
                if (detailRes.status === 402 || detailRes.status === 429) {
                  setUseMockFallback(true);
                  setMealSuggestions(MOCK_MEALS);
                  throw new Error("API limit reached");
                }
                throw new Error("API error");
              }
              const detail = await detailRes.json();

              // Only include recipes with non-empty analyzedInstructions
              if (
                !detail.analyzedInstructions ||
                !Array.isArray(detail.analyzedInstructions) ||
                detail.analyzedInstructions.length === 0 ||
                !detail.analyzedInstructions[0].steps ||
                detail.analyzedInstructions[0].steps.length === 0
              ) {
                return null;
              }

              let instructions = detail.instructions;
              if (
                (!instructions || instructions.trim() === "") &&
                detail.analyzedInstructions &&
                detail.analyzedInstructions.length > 0
              ) {
                instructions = detail.analyzedInstructions[0].steps
                  .map((step: { step: string }) => step.step)
                  .join("<br/>");
              }

              return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                imagehigher: `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`,
                usedIngredients: recipe.usedIngredients.map(
                  (i: { name: string }) => i.name
                ),
                missedIngredients: recipe.missedIngredients.map(
                  (i: { name: string }) => i.name
                ),
                description: detail.summary,
                readyInMinutes: detail.readyInMinutes,
                instructions,
                fullIngredients:
                  detail.extendedIngredients?.map(
                    (ingredient: { id: number; original: string }) =>
                      ingredient.original
                  ) || [],
                servings: detail.servings,
              };
            }
          )
        );

        // Filter out any nulls (recipes without analyzedInstructions)
        setMealSuggestions(detailedRecipes.filter(Boolean));
        localStorage.setItem(
          key,
          JSON.stringify(detailedRecipes.filter(Boolean))
        );
      } catch (error) {
        console.error("Error fetching meals:", error);
        if (!useMockFallback) {
          alert(
            "There was a problem fetching meal suggestions. Please try again later."
          );
        }
      }
    };

    fetchRecipes();
  }, [userIngredients, useMockFallback]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Meal Suggestions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
        {mealSuggestions.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onClick={() => {
              setSelectedMeal(meal);
              setShowModal(true);
            }}
          />
        ))}
      </div>
      {showModal && selectedMeal && (
        <RecipeModal meal={selectedMeal} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};
