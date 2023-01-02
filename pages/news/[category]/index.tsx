import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../../components/NewsList";

function NewsCategory() {
  const [news, setNews] = useState<NewsResponse | null>(null);
  const router = useRouter();
  const asPath = router.asPath;
  const category = asPath.split("/")[2];
  //giving map error
  useEffect(() => {
    async function fetchData() {
      const data: NewsResponse = await fetchNews(category);
      setNews(data);
    }
    fetchData();
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news ? news : null} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
