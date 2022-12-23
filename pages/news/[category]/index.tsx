import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";
// type Props = {
//   params: { category: Category };
// };

function NewsCategory() {
  const [news, setNews] = useState();
  const router = useRouter();
  const asPath = router.asPath;
  const category = asPath.split("/")[2];
  //giving map error
  // useEffect(() => {
  //   let news = async () => await fetchNews(category);
  //   setNews(news);
  // });
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news ? news : null} />
    </div>
  );
}

export default NewsCategory;

// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     category: category,
//   }));
// }
