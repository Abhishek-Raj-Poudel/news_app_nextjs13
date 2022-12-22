import React from "react";
import ArticleCard from "./ArticleCard";
type Props = {
  news: NewsResponse | null;
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news?.data.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
