import React, { useEffect, useState } from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

function Homepage() {
  const [news, setNews] = useState<NewsResponse | null>(null);
  // fetch the news data
  useEffect(() => {
    async function fetchData() {
      const data: NewsResponse = await fetchNews(categories.join(","));
      // console.log(data);
      setNews(data);
    }
    fetchData();
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
