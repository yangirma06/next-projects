import { bookmarks } from "@/data/bookmarks";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BookmarkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookmark = bookmarks.find((b) => b.id === Number(id));

  if (!bookmark) {
    notFound();
  }

  return (
    <main className="max-w-md mx-auto mt-10 p-4">
    
      <h1 className="text-2xl font-bold mt-4 mb-2">{bookmark.title}</h1>
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {bookmark.url}
      </a>
    </main>
  );
}