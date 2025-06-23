export type MealSuggestionType = {
  id: number;
  title: string;
  image: string;
  usedIngredients: string[];
  missedIngredients: string[];
  description: string;
  readyInMinutes: number;
};
