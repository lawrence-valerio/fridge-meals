import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import type { MealSuggestionType } from "./MealSuggestion.types";

export const MealCard = ({ meal }: { meal: MealSuggestionType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{meal.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {meal.description.replace(/<[^>]+>/g, "").slice(0, 150) + "..."}
        </p>
        <div>
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
        <div className="mt-4 text-sm text-gray-500">
          Ready in {meal.readyInMinutes} minutes
        </div>
      </div>
    </div>
  );
};
