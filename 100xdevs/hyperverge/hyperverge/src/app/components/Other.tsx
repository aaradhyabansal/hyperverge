"use client"; // Add this at the top of the file

import WeatherWidget from './weather';
import GoogleSlidesWidget from './slides';
import ScreenTimeWidget from './screentime';
import './Other.css';

const CombinedWidgets = () => {
  return (
    <div className="p-8 space-y-8">
      <WeatherWidget />
    
      <ScreenTimeWidget />
    </div>
  );
};

export default CombinedWidgets;

