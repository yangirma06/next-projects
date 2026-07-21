import { getAllRecipes } from "@/lib/recipes";
import RecipeList from "./RecipeList";

export default function Home() {
  const recipes = getAllRecipes();

  return (
    // Same card-on-gray-background pattern used in Todo app and Bookmark app —
    // keeping this consistent across projects is itself a design decision:
    // recognizable, repeatable structure instead of reinventing layout each time.
    <main className="min-h-screen bg-gray-50 flex items-start justify-center pt-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
        <h1 className="text-3xl font-semibold mb-1 text-gray-900">
          Recipe Box
        </h1>
        <p className="text-sm text-gray-500 mb-6">{recipes.length} recipes</p>
        <RecipeList recipes={recipes} />
      </div>
    </main>
  );
}