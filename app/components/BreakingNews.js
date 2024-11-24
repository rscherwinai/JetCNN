'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BreakingNews() {
  const [visible, setVisible] = useState(true);
  const [currentNews, setCurrentNews] = useState(0);

  const breakingNews = [
    {
      id: 1,
      text: "BREAKING: Aaron Rodgers cleared for light practice activities",
      link: "/articles/1"
    },
    {
      id: 2,
      text: "Jets sign veteran offensive lineman - Details inside",
      link: "/articles/2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-[#CC0000] text-white py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-bold animate-pulse">BREAKING</span>
            <Link 
              href={breakingNews[currentNews].link}
              className="hover:underline transition-all"
            >
              {breakingNews[currentNews].text}
            </Link>
          </div>
          <button 
            onClick={() => setVisible(false)}
            className="text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
} 