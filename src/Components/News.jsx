// src/components/News.js

import React, { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from a public stock-related API. You can replace this with an actual API.
    const fetchNews = async () => {
      const response = await fetch('https://api.sampleapis.com/fakefinance/news'); // Example API
      const data = await response.json();
      setNews(data.slice(0, 5)); // Limit to 5 articles
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Related News</h2>
      <ul>
        {news.length === 0 ? (
          <li className="p-2">No news available at the moment</li>
        ) : (
          news.map((article, index) => (
            <li key={index} className="p-2 border-b border-gray-700">
              <a href={article.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
