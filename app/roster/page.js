import { articles } from "../data/articles";
import ArticleList from "../components/ArticleList";

export default function RosterPage() {
  const rosterArticles = articles.filter(article => 
    article.category === "Player Focus" || article.category === "Team"
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Team Roster & Player News</h1>
      <ArticleList articles={rosterArticles} />
    </div>
  );
} 