import { getRecipeBySlug } from "@/lib/recipes";
import { notFound } from "next/navigation";

// Page component is async because params is a Promise in Next.js 16 —
// we must await it before reading any values out of it.
export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // unwrap the promise to get the actual slug string

  const recipe = getRecipeBySlug(slug);

  // If no recipe matches this slug (e.g. bad/old URL), show the built-in 404 page
  // instead of crashing or rendering an empty page.
  if (!recipe) {
    notFound();
  }

  return (
    <main className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

      <h2 className="font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
        {/* .map() renders one <li> per ingredient string in the array */}
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="font-semibold mb-2">Steps</h2>
      <ol className="list-decimal list-inside text-sm text-gray-700">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}