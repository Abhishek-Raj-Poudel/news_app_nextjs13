import type { NextPage } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
  searchParams?: Article;
};

const ArticlePage: NextPage = ({ searchParams }: Props) => {
  const router = useRouter();
  //not found in next/navigation but may be there in some version find it.
  // query will contain the query parameters from the URL
  const { query } = router;

  console.log(Object.entries(query));
  if ((query && Object.entries(query).length === 0) || !query) {
    return <Error statusCode={404} />;
  }

  const article: Article = query;

  return (
    <article className="max-w-6xl mx-auto">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By - {article.author || "unknown"}</h2>
            <h2 className="font-bold pl-4">Source - {article.source}</h2>
            <p className="pl-4">{article.published_at}</p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
