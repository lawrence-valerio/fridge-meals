# 🍳 FridgeMeals

> **Cook delicious meals with what you already have in your fridge**

FridgeMeals is a smart recipe recommendation app that helps you discover amazing dishes using ingredients you already have in your fridge. No more wondering what to cook or making unnecessary grocery trips!

![FridgeMeals Hero](https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)

## ✨ Features

- **🧀 Ingredient-Based Recipe Search** - Enter what you have, get personalized recipe suggestions
- **🎯 Smart Matching** - Find recipes that match your available ingredients
- **📱 Modern UI** - Beautiful, responsive design that works on all devices
- **💾 Local Storage** - Your ingredients are saved for convenience
- **⚡ Fast & Lightweight** - Built with Next.js 15 and optimized for performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fridgemeals.git
   cd fridgemeals
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action!

## 🛠️ How It Works

### 1. Enter Your Ingredients

Simply tell us what ingredients you have in your kitchen. Our app will do the rest.

### 2. Get Recipe Matches

We'll show you recipes that match your available ingredients, with options for all skill levels.

### 3. Cook & Enjoy

Follow our simple instructions to prepare delicious meals with what you already have in your fridge.

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Development**: [Turbopack](https://turbo.build/pack) for fast builds

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Shared components
│   ├── home/
│   │   └── recipes/        # Recipe suggestion feature
│   ├── overview/           # Landing page
│   └── shopping-list/      # Shopping list feature
├── constants/              # App constants
└── globals.css            # Global styles
```

## 🎨 Key Components

- **IngredientInput** - Add and manage your available ingredients
- **MealSuggestion** - Display recipe recommendations
- **RecipeModal** - Detailed recipe view
- **Header & Navigation** - App navigation and branding

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy FridgeMeals is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your project to Vercel
3. Deploy with one click!
