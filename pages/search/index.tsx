"use server";

import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

function SearchPage({ searchParams }: Props) {
  const [news, setNews] = useState<NewsResponse | null>();
  const router = useRouter();
  const { query } = router;

  console.log(query);

  useEffect(() => {
    async () => {
      let news = await fetchNews("general", "world cup", true);
      console.log(news);
      setNews(news);
    };
  });

  console.log(news);

  if ((query && Object.entries(query).length === 0) || !query) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <h1 className="headerTitle">Search Result for: {query?.term}</h1>
      <NewsList news={news ? news : null} />
    </div>
  );
}

export default SearchPage;
