import { articles } from "../data/articles";
import ArticleList from "../components/ArticleList";

export default function SchedulePage() {
  const scheduleArticles = articles.filter(article => 
    article.category === "Schedule" || article.category === "Game Preview"
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Schedule & Game Coverage</h1>
      <ArticleList articles={scheduleArticles} />
    </div>
  );
} 