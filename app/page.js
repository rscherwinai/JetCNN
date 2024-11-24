import Image from "next/image";
import Link from "next/link";
import { articles } from "./data/articles";

export default function Home() {
  const featuredArticle = articles[0];
  const topStories = articles.slice(1, 4);
  const latestNews = articles.slice(4, 10);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Featured Story */}
      <div className="mb-12">
        <Link href={`/articles/${featuredArticle.id}`} className="group">
          <div className="relative h-[600px] w-full mb-4">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
              <span className="text-sm font-semibold bg-[#125740] px-3 py-1 rounded-full">
                {featuredArticle.category}
              </span>
              <h1 className="text-4xl font-bold mt-3 mb-2 group-hover:text-[#125740] transition-colors">
                {featuredArticle.title}
              </h1>
              <p className="text-lg text-gray-200">{featuredArticle.summary}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Top Stories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#125740]">
          Top Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topStories.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="group">
              <div className="relative h-[240px] mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <span className="text-sm font-semibold text-[#125740]">
                {article.category}
              </span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#125740] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{article.summary}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#125740]">
          Latest News
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="group flex gap-4">
              <div className="relative h-[100px] w-[150px] flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-[#125740]">
                  {article.category}
                </span>
                <h3 className="font-bold mt-1 group-hover:text-[#125740] transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
