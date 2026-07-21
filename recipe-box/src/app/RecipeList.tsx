"use client";

import { useState } from "react";
import Link from "next/link";
import type { Recipe } from "@/lib/recipes";

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search recipes..."
      />

      {filteredRecipes.length === 0 ? (
        // Styled consistently with the "empty state" pattern from Todo/Bookmark apps —
        // muted gray text, centered, generous vertical padding.
        <p className="text-sm text-gray-400 text-center py-8">
          No recipes match your search.
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredRecipes.map((recipe) => (
            <li
              key={recipe.slug}
              className="border border-gray-200 rounded-lg px-3 py-2"
            >
              <Link
                href={`/recipes/${recipe.slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}