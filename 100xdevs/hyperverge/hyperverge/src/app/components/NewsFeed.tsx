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

      {/* Twitter Feed Container */}
      <div className="w-[350px] h-[95%] overflow-y-scroll bg-white rounded-lg shadow-lg p-4">
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
