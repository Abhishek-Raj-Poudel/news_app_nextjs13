import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const STEPZEN_API_KEY = process.env.STEPZEN_API_KEY;
const MEDIASTACK_API_KEY = process.env.MEDIASTACK_API_KEY;

const STEPZEN_API_KEY2 =
  "dobbsferry::stepzen.net+1000::ed98974c51766c3636c70217472bf7336f3c0880784c027b7197dcc2b1456cdd";
const MEDIASTACK_API_KEY2 = "60aff91d916acfe475c5fcf4b3714de3";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQl query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  //Fetch function with nextjs 13 caching...
  const res = await fetch(
    "https://dobbsferry.stepzen.net/api/crusty-jackal/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 120 }, //if the сached data is older than 120 secs, revalidate
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${STEPZEN_API_KEY2}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: MEDIASTACK_API_KEY2,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  // console.log(process.env.STEPZEN_API_KEY, process.env.MEDIASTACK_API_KEY);
  console.log("LOADING NEW DATA FROM API for category >>>", category, keywords);

  const newsResponse = await res.json();
  console.log(newsResponse.data);
  // Sort function by images vs not imges present
  const news = sortNewsByImage(newsResponse.data.myQuery);
  // return news
  return news;
};

export default fetchNews;
// example import
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=60aff91d916acfe475c5fcf4b3714de3"

//"http://api.mediastack.com/v1/news?access_key=60aff91d916acfe475c5fcf4b3714de3"
