import Link from "next/link";

export const OverviewHero = () => {
  return (
    <header className="cs-bg-background text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cook delicious meals with what you already have in your fridge
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Enter your ingredients. Get personalized recipe suggestions. Cook
            amazing meals.
          </p>
          <Link
            href="/home/recipes"
            className="inline-block cs-bg-primary text-black font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <div className="relative">
            <div className="bg-white p-1 rounded-sm shadow-xl transform rotate-3 z-10">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Delicious meal"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
