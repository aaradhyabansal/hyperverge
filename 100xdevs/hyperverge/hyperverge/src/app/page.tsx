// Ensure this is the first line in your file
'use client';

import React, { useState, useEffect } from 'react';
import SmallCard from './components/SmallCard';
import NewsFeed from './components/NewsFeed';
import Other from './components/Other';

const Home: React.FC = () => {
  const [showNewsFeed, setShowNewsFeed] = useState(false); // Start with Other visible

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNewsFeed((prev) => !prev);
    }, 6000); // Switch every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 bg-gray-900 text-white">
      <div className="col-span-1 relative overflow-hidden">
        {/* Transition Container for Animation */}
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            showNewsFeed ? 'translate-x-0' : 'translate-x-full'
          } absolute inset-0`}
        >
          <NewsFeed />
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            showNewsFeed ? 'translate-x-full' : 'translate-x-0'
          } absolute inset-0`}
        >
          <Other />
        </div>
      </div>

      <div className="col-span-2">
        <SmallCard />
      </div>
    </div>
  );
};

export default Home;
