import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchNews from "../../lib/fetchNews";
import NewsList from "../../components/NewsList";

function SearchPage() {
  const [news, setNews] = useState<NewsResponse | null>(null);
  const router = useRouter();
  const { query } = router;

  console.log(query.term);

  useEffect(() => {
    async function fetchData() {
      const data: NewsResponse = await fetchNews(
        "general",
        `${query.term}`,
        true
      );
      setNews(data);
    }
    fetchData();
  }, []);
  // console.log(news);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="headerTitle">Search Result for: {query?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
