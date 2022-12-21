type Article = {
  author: string;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  cound: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

//Pagination is the process of separating print or digital content into discrete pages
type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
