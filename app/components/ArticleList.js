import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Aaron Rodgers Returns to Practice Field in Promising Development",
    excerpt: "In a significant development for the New York Jets, quarterback Aaron Rodgers was seen throwing passes during individual drills at the team's practice facility on Wednesday. The four-time NFL MVP, who is recovering from a torn Achilles suffered in Week 1, showed encouraging mobility and arm strength during the 15-minute session open to media. Head coach Robert Saleh emphasized that while this marks a positive step in Rodgers' rehabilitation process, the team will continue to take a cautious approach...",
    date: "2023-12-13",
    image: "/images/article1.jpg"
  },
  {
    id: 2,
    title: "Jets Defense Ranks Top 5 in Multiple Categories Despite Offensive Struggles",
    excerpt: "The New York Jets' defense continues to be a bright spot in an otherwise challenging season, ranking third in passing yards allowed and fourth in total defense through Week 14. Defensive coordinator Jeff Ulbrich's unit has been particularly impressive in the red zone, holding opponents to just a 43% touchdown rate. Sauce Gardner and D.J. Reed have formed one of the NFL's most formidable cornerback duos, while Quinnen Williams leads the defensive front with consistent pressure on opposing quarterbacks...",
    date: "2023-12-12",
    image: "/images/article2.jpg"
  },
  {
    id: 3,
    title: "Garrett Wilson Breaks Franchise Record as Bright Spot in Jets Offense",
    excerpt: "Second-year wide receiver Garrett Wilson achieved a significant milestone on Sunday, becoming the first Jets receiver to record 80+ receptions in consecutive seasons. Despite working with multiple quarterbacks throughout the season, Wilson has showcased his elite route-running ability and reliable hands, accumulating 847 receiving yards and three touchdowns. The Ohio State product has drawn praise from coaches and analysts alike for his consistency and professionalism in challenging circumstances...",
    date: "2023-12-11",
    image: "/images/article3.jpg"
  },
  {
    id: 4,
    title: "Jets Announce Major Stadium Upgrades for 2024 Season",
    excerpt: "The New York Jets have unveiled plans for significant improvements to MetLife Stadium, set to be completed before the 2024 season. The $100 million renovation project includes enhanced video boards, upgraded concession areas, and a modernized Jets Hall of Fame experience. Team president Hymie Elhai emphasized the organization's commitment to providing fans with a premier gameday experience. The renovations will also feature improved cellular and Wi-Fi connectivity throughout the stadium...",
    date: "2023-12-10",
    image: "/images/article4.jpg"
  }
];

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
          <p className="text-gray-600 mt-2">{article.excerpt}</p>
          <div className="text-sm text-gray-500 mt-2">
            {new Date(article.date).toLocaleDateString()}
          </div>
        </Link>
      ))}
    </div>
  );
} 