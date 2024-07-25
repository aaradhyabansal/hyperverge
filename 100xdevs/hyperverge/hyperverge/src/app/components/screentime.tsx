"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ScreenTimeWidget = () => {
  return (
    <div className="screen-time-widget p-4 bg-gray-800 text-white rounded-lg shadow-lg w-[90%] max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Screen Time</h2>
      <ul className="space-y-4">
        {Object.entries({
          Facebook: '1h 20m',
          Twitter: '30m',
          Instagram: '45m',
          LinkedIn: '15m',
          Youtube: '2h 10m',
        }).map(([platform, time]) => (
          <li key={platform} className="flex items-center">
            {/* Icons for each platform */}
            {platform === 'Facebook' && <FaFacebook size={24} className="mr-2" />}
            {platform === 'Twitter' && <FaTwitter size={24} className="mr-2" />}
            {platform === 'Instagram' && <FaInstagram size={24} className="mr-2" />}
            {platform === 'LinkedIn' && <FaLinkedin size={24} className="mr-2" />}
            {platform === 'Youtube' && <FaYoutube size={24} className="mr-2" />}

            {/* Platform name and time */}
            <span className="flex-1 font-semibold">{platform}</span>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScreenTimeWidget;
