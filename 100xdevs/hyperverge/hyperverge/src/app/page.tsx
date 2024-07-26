'use client';

import React, { useState, useEffect } from 'react';
import SmallCard from './components/SmallCard';
import NewsFeed from './components/NewsFeed';
import Other from './components/Other';

const Home: React.FC = () => {
  const [showNewsFeed, setShowNewsFeed] = useState(false); // Start with Other visible
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) { // Only switch if not hovering
        setShowNewsFeed((prev) => !prev);
      }
    }, 6000); // Switch every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isHovering]);

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 bg-gray-900 text-white">
      <div
        className="col-span-1 relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Container for animation */}
        <div
          className={`absolute inset-0 transform transition-transform duration-1000 ease-in-out ${
            showNewsFeed ? 'translate-x-0' : '-translate-x-full'
          } ${isHovering ? 'animation-paused' : ''}`}
        >
          <NewsFeed />
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-1000 ease-in-out ${
            showNewsFeed ? 'translate-x-full' : 'translate-x-0'
          } ${isHovering ? 'animation-paused' : ''}`}
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
