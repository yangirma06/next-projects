"use client";

import { useState } from "react";
import Link from "next/link";
import { bookmarks as initialBookmarks } from "@/data/bookmarks";

type Bookmark = {
  id: number;
  title: string;
  url: string;
};

export default function Home() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(initialBookmarks);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (title.trim() === "" || url.trim() === "") return;

    const newBookmark: Bookmark = {
      id: Date.now(),
      title,
      url,
    };

    setBookmarks([...bookmarks, newBookmark]);
    setTitle("");
    setUrl("");
  }

  function deleteBookmark(id: number) {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-start justify-center pt-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
        <h1 className="text-3xl font-semibold mb-1 text-gray-900">
          My Bookmarks
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {bookmarks.length} saved
        </p>

        <div className="flex flex-col gap-2 mb-6">
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Add Bookmark
          </button>
        </div>

        {bookmarks.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            No bookmarks yet — add one above.
          </p>
        ) : (
          <ul className="space-y-2">
            {bookmarks.map((bookmark) => (
              <li
                key={bookmark.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2"
              >
                <Link
                  href={`/bookmarks/${bookmark.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {bookmark.title}
                </Link>
                <button
                  onClick={() => deleteBookmark(bookmark.id)}
                  className="text-gray-400 hover:text-red-500 text-xs transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}