import Image from "next/image";
import { articles } from "../../data/articles";

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.id === parseInt(params.id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-gray-600 mb-8">
            {new Date(article.date).toLocaleDateString()} | {article.category}
          </div>
          <div className="relative h-[500px] mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose lg:prose-xl max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
} 