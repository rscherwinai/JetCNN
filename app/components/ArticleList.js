import Link from "next/link";
import Image from "next/image";

export default function ArticleList({ articles }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Link key={article.id} href={`/articles/${article.id}`} className="group">
          <div className="relative h-[200px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 group-hover:text-[#CC0000]">
            {article.title}
          </h3>
          <p className="text-gray-600 mt-2">{article.summary}</p>
          <div className="text-sm text-gray-500 mt-2">
            {new Date(article.date).toLocaleDateString()}
          </div>
        </Link>
      ))}
    </div>
  );
} 