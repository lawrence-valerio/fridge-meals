import type { MealSuggestionType } from "./MealSuggestion.types";
import { XIcon } from "lucide-react";
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
          <div className="h-64 overflow-hidden">
            <h1>test modal</h1>
          </div>
          {meal.instructions && (
            <div className="p-4 overflow-y-auto max-h-64">
              <h2 className="text-lg font-semibold mb-2">Instructions</h2>
              <div
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: meal.instructions }}
              />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <XIcon size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
