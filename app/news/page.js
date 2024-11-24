import { articles } from "../data/articles";
import ArticleList from "../components/ArticleList";

export default function NewsPage() {
  const newsArticles = articles.filter(article => article.category === "News");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <ArticleList articles={newsArticles} />
    </div>
  );
} 