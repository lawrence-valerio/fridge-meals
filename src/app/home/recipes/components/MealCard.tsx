import { CheckCircleIcon } from "lucide-react";

export const MealCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          alt="spaghetti"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            Spaghetti Carbonara
          </h3>
        </div>
        <p className="text-gray-600 mb-4">
          A classic Italian pasta dish with creamy egg sauce and bacon.
        </p>
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
          <div className="py-1">
            <div className="mb-2">
              <p className="text-sm text-green-700 mb-1 flex items-center">
                <CheckCircleIcon size={16} className="mr-1" /> You have:
              </p>
            </div>
            <div>
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                pasta
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
