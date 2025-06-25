"use client";

import Link from "next/link";
import { UtensilsIcon, SearchIcon, ClockIcon } from "lucide-react";
import { APP_NAME } from "../../../../constants/app";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 text-white">
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
              className="inline-block bg-white text-rose-400 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white p-3 rounded-lg shadow-xl transform rotate-3 z-10">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Delicious meal"
                  className="rounded-lg shadow-inner w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xl absolute top-8 -right-5 transform -rotate-2 z-20">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Cooking ingredients"
                  className="rounded-lg shadow-inner w-48 h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            How {APP_NAME} Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon size={32} className="text-rose-400" />
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
                <SearchIcon size={32} className="text-rose-400" />
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
                <ClockIcon size={32} className="text-rose-400" />
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
      {/* CTA Section */}
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
            className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:from-rose-500 hover:to-pink-500 transition-colors duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
