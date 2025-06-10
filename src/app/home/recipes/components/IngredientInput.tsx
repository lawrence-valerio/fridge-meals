"use client";

import { useState, useEffect } from "react";
import { PlusCircleIcon, XIcon } from "lucide-react";

const MOCK_INGREDIENTS = [
  "chicken",
  "beef",
  "pasta",
  "rice",
  "eggs",
  "cheese",
  "tomatoes",
  "onions",
  "garlic",
  "potatoes",
  "broccoli",
  "carrots",
  "bell peppers",
  "spinach",
  "milk",
  "butter",
  "olive oil",
  "salt",
  "pepper",
  "flour",
  "sugar",
  "bread",
];

const USE_MOCK_DATA = true;

export const IngredientInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [userIngredients, setUserIngredients] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("userIngredients");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("userIngredients", JSON.stringify(userIngredients));
  }, [userIngredients]);

  const handleAddIngredient = () => {
    const trimmed = inputValue.trim().toLowerCase();

    if (trimmed && !userIngredients.includes(trimmed)) {
      setUserIngredients([...userIngredients, trimmed]);
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 2) {
      if (USE_MOCK_DATA) {
        const filteredSuggestions = MOCK_INGREDIENTS.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        ).filter((name) => !userIngredients.includes(name.toLowerCase()));
        setSuggestions(filteredSuggestions);
      } else {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${value}&number=5`
          );
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            const filteredSuggestions = data
              .map((item: { name: string }) => item.name.toLowerCase())
              .filter((name: string) => !userIngredients.includes(name));
            setSuggestions(filteredSuggestions);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestions = (suggestions: string) => {
    setUserIngredients([...userIngredients, suggestions]);
    setInputValue("");
    setSuggestions([]);
  };

  const removeIngredient = (ingredient: string) => {
    setUserIngredients(userIngredients.filter((i) => i !== ingredient));
  };

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          What ingredients do you have?
        </h2>

        {/* Added ingredients */}
        <div className="flex flex-wrap gap-2 mb-4">
          {userIngredients.map((ingredient) => (
            <div
              key={ingredient}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center hover:bg-indigo-200 transition-colors duration-150"
            >
              <span>{ingredient}</span>
              <button
                onClick={() => removeIngredient(ingredient)}
                className="ml-2 text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                <XIcon size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Input field */}
        <div className="relative">
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type an ingredient (e.g. chicken, eggs, tomatoes)"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddIngredient}
              className="bg-indigo-600 text-white p-3 rounded-r-lg hover:bg-indigo-700 flex items-center"
            >
              <PlusCircleIcon size={20} className="mr-1" /> Add
            </button>
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-b-lg shadow-lg mt-1 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion}
                  onClick={() => handleSuggestions(suggestion)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
