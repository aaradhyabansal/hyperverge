export default function NewsFeed() {
  // Hardcoded weather information
  const weather = {
    temp: "25°C",
    condition: "Sunny",
    chanceOfRain: "10%",
    city: "Noida",
    pastWeather: "22°C, Cloudy",
    icon: "☀️",
  };

  return (
    <div className="flex flex-col p-5 h-screen">
      {/* Weather Section */}
      <div className="w-[350px] p-4 mb-4 bg-gray-800 text-gray-100 rounded-lg shadow-lg flex flex-col items-start">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{weather.icon}</span>
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-1">{weather.city}</h2>
            <p className="text-lg font-semibold">{weather.temp}</p>
            <p className="text-sm">{weather.condition}</p>
          </div>
        </div>
        <div className="w-full border-t border-gray-600 pt-4">
          <p className="text-sm mb-1">Chance of Rain:</p>
          <p className="text-lg font-semibold">{weather.chanceOfRain}</p>
        </div>
        <div className="w-full border-t border-gray-600 pt-4">
          <p className="text-sm mb-1">Past Weather:</p>
          <p className="text-lg font-semibold">{weather.pastWeather}</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-white mb-4">News Feed</h1>

      {/* Twitter Feed Container */}
      <div className="w-[350px] h-[85%] overflow-y-scroll bg-white rounded-lg shadow-lg p-4">
        <a
          className="twitter-timeline"
          href="https://twitter.com/BrutIndia?ref_src=twsrc%5Etfw"
        >
          Tweets by BrutIndia
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
        ></script>
      </div>
    </div>
  );
}
