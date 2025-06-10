import { IngredientInput } from "./components/IngredientInput";

export default function Recipes() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Ingredients</h1>

      <IngredientInput />
    </div>
  );
}
