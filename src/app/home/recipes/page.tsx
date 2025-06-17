import { IngredientInput } from "./components/IngredientInput";
import { MealSuggestion } from "./components/MealSuggestion";

export default function Recipes() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <IngredientInput />
      <MealSuggestion />
    </div>
  );
}
