// This file centralizes all filesystem access for recipes.
// Any page that needs recipe data imports from here instead of
// reading files directly — one source of truth for "how we get data."

import fs from "fs";
import path from "path";

// Path to the folder containing all recipe JSON files.
const recipesDirectory = path.join(process.cwd(), "src/data/recipes");

export type Recipe = {
  slug: string;
  title: string;
  ingredients: string[];
  steps: string[];
};

// Reads every .json file in the recipes folder and parses it into an object.
// Returns an array of all recipes — used by the home page to list them.
export function getAllRecipes(): Recipe[] {
  const fileNames = fs.readdirSync(recipesDirectory); // e.g. ["pasta.json", "tacos.json"]

  return fileNames.map((fileName) => {
    const filePath = path.join(recipesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8"); // raw JSON text
    return JSON.parse(fileContents) as Recipe; // parsed into a real object
  });
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  const recipes = getAllRecipes();
  return recipes.find((recipe) => recipe.slug === slug);
}