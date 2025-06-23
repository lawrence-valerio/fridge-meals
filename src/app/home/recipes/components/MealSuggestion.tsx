"use client";

import { MealCard } from "./MealCard";
import { useEffect, useState } from "react";
import type { MealSuggestionType } from "./MealSuggestion.types";

// Helper functions for localStorage
const LOCAL_MEALS_KEY = "mealSuggestions";

export const MealSuggestion = ({
  userIngredients,
}: {
  userIngredients: string[];
}) => {
  const [mealSuggestions, setMealSuggestions] = useState<MealSuggestionType[]>(
    () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(LOCAL_MEALS_KEY);
        return saved ? JSON.parse(saved) : [];
      }
      return [];
    }
  );

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
      try {
        const ingredientsQuery = userIngredients.join(",");
        const findUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&ingredients=${ingredientsQuery}&number=5`;

        const findRes = await fetch(findUrl);
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
              const detail = await detailRes.json();

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
              };
            }
          )
        );

        setMealSuggestions(detailedRecipes);
        localStorage.setItem(key, JSON.stringify(detailedRecipes));
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchRecipes();
  }, [userIngredients]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Meal Suggestions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
        {mealSuggestions.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </section>
  );
};
