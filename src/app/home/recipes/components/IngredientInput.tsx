"use client";

import { useState } from "react";
import { PlusCircleIcon, XIcon } from "lucide-react";

/* Placeholder until i setup API */
const commonIngredients = [
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

export const IngredientInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [userIngredients, setUserIngredients] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAddIngredient = () => {
    const trimmed = inputValue.trim().toLowerCase();

    if (trimmed && !userIngredients.includes(trimmed)) {
      setUserIngredients([...userIngredients, trimmed]);
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = commonIngredients.filter(
        (item) =>
          item.toLowerCase().includes(value.toLowerCase()) &&
          !userIngredients.includes(item.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
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

        <div className="flex flex-wrap gap-2 mb-4">
          {userIngredients.map((ingredient) => (
            <div
              key={ingredient}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center"
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
        </div>
      </div>
    </section>
  );
};
