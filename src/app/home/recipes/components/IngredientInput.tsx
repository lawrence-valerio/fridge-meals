"use client";

import { useState } from "react";
import { PlusCircleIcon, XIcon } from "lucide-react";

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

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          What ingredients do you have?
        </h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {userIngredients.map((ingredient) => (
            <div key={ingredient}>
              <span>{ingredient}</span>
              <button className="ml-2 text-indigo-600 hover:text-indigo-800">
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
              onChange={(e) => setInputValue(e.target.value)}
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
