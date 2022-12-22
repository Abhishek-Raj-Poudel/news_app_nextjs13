"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    // find out about Object.enteries it in your note.
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className=" bg-yellow-500 h-10 rounded-b-lg dark:text-gray-900 hover:bg-yellow-400"
    >
      Read More !!
    </button>
  );
}

export default ReadMoreButton;
