// "use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-400 text-gray-600 outline-none flex-1 bg-transparent dark:text-yellow-600"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-yellow-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
