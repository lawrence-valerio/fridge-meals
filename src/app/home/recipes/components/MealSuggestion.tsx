import { MealCard } from "./MealCard";

export const MealSuggestion = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Meal Suggestions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
        <MealCard />
      </div>
    </section>
  );
};
