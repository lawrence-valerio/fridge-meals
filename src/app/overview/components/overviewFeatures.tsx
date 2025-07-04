import { SearchIcon, ClockIcon } from "lucide-react";
import { APP_NAME } from "../../../constants/app";
import Link from "next/link";

export const OverviewFeatuers = () => {
  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            How {APP_NAME} Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon size={32} className="cs-color-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Enter Your Ingredients
              </h3>
              <p className="text-gray-600">
                Simply tell us what ingredients you have in your kitchen. Our
                app will do the rest.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon size={32} className="cs-color-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get Recipe Matches
              </h3>
              <p className="text-gray-600">
                We&apos;ll show you recipes that match your available
                ingredients, with options for all skill levels.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon size={32} className="cs-color-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cook &amp; Enjoy
              </h3>
              <p className="text-gray-600">
                Follow our simple instructions to prepare delicious meals with
                what you already have in your fridge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to find your perfect meal?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop wondering what to cook. Start creating delicious meals with
            ingredients you already have.
          </p>
          <Link
            href="/home/recipes"
            className="inline-block cs-bg-primary font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:from-rose-500 hover:to-pink-500 transition-colors duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
};
