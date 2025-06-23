"use client";

import { IngredientInput } from "./components/IngredientInput";
import { MealSuggestion } from "./components/MealSuggestion";
import { useState } from "react";

export default function Recipes() {
  const [userIngredients, setUserIngredients] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("userIngredients");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  return (
    <div className="container mx-auto px-4 py-8 ">
      <IngredientInput
        userIngredients={userIngredients}
        setUserIngredients={setUserIngredients}
      />
      <MealSuggestion userIngredients={userIngredients} />
    </div>
  );
}
