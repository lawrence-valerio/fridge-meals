import type { MealSuggestionType } from "./MealSuggestion.types";
import { XIcon, ClockIcon, UsersIcon } from "lucide-react";
import { createPortal } from "react-dom";

export const RecipeModal = ({
  meal,
  onClose,
}: {
  meal: MealSuggestionType;
  onClose: () => void;
}) => {
  if (typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="relative">
          <div className="h-90 overflow-hidden">
            <img
              src={meal.imagehigher}
              alt={meal.title}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <XIcon size={24} className="text-rose-500 cursor-pointer" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {meal.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {typeof meal.description === "string"
              ? meal.description.replace(/<[^>]+>/g, "")
              : "No description available."}
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <ClockIcon size={20} className="mr-2" />
              {meal.readyInMinutes} minutes
            </div>
            <div className="flex items-center text-gray-600">
              <UsersIcon size={20} className="mr-2" />
              {meal.servings} servings
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <div className="space-y-2">
                {meal.fullIngredients && meal.fullIngredients.length > 0 ? (
                  <div>
                    <ul className="space-y-2">
                      {meal.fullIngredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-gray-500 italic">
                    No ingredients information available
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Instructions</h3>
              <div className="prose prose-sm max-w-none">
                {meal.instructions ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: meal.instructions,
                    }}
                    className="text-gray-700 leading-relaxed"
                  />
                ) : (
                  <p className="text-gray-500 italic">
                    No instructions available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
