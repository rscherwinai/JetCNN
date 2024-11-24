import { articles } from "../data/articles";
import ArticleList from "../components/ArticleList";

export default function AnalysisPage() {
  const analysisArticles = articles.filter(article => article.category === "Analysis");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Analysis & Commentary</h1>
      <ArticleList articles={analysisArticles} />
    </div>
  );
} 