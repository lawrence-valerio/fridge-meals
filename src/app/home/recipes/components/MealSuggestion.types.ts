export type MealSuggestionType = {
  id: number;
  title: string;
  image: string;
  imagehigher: string;
  usedIngredients: string[];
  missedIngredients: string[];
  description: string;
  readyInMinutes: number;
  instructions?: string;
  fullIngredients?: string[];
  servings?: number;
};
