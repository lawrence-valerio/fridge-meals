"use client";

import { CheckCircleIcon, XCircleIcon, ClockIcon } from "lucide-react";
import type { MealSuggestionType } from "./MealSuggestion.types";
import React, { useState } from "react";

export const MealCard = ({
  meal,
  onClick,
}: {
  meal: MealSuggestionType;
  onClick?: () => void;
}) => {
  const [highResLoaded, setHighResLoaded] = useState(false);

  return (
    <div
      className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
      onClick={onClick}
    >
      <div className="h-60 overflow-hidden relative">
        {/* Low-res blurred image */}
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover absolute inset-0 blur-md scale-105 transition-all duration-500"
          aria-hidden="true"
        />
        {/* High-res image, fades in when loaded */}
        <img
          src={meal.imagehigher}
          alt={meal.title}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${
            highResLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setHighResLoaded(true)}
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{meal.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {typeof meal.description === "string"
            ? meal.description.replace(/<[^>]+>/g, "").slice(0, 150) + "..."
            : "No description available."}
        </p>
        <div className="mb-2">
          <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
          <div className="space-y-2">
            <div className="mb-2">
              <p className="text-sm text-green-700 mb-1 flex items-center">
                <CheckCircleIcon size={16} className="mr-1" /> You have:
              </p>
              <div className="flex flex-wrap gap-1">
                {meal.usedIngredients.map((ingredient: string) => (
                  <span
                    key={ingredient}
                    className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-red-700 mb-1 flex items-center">
                <XCircleIcon size={16} className="mr-1" /> You need:
              </p>
              <div className="flex flex-wrap gap-1">
                {meal.missedIngredients.map((ingredient: string) => (
                  <span
                    key={ingredient}
                    className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <ClockIcon size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">
            {meal.readyInMinutes} minutes
          </span>
        </div>
      </div>
    </div>
  );
};
