"use client";

import { IngredientInput } from "./components/IngredientInput";
import { MealSuggestion } from "./components/MealSuggestion";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [userIngredients, setUserIngredients] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("userIngredients");
    if (saved) setUserIngredients(JSON.parse(saved));
  }, []);

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
