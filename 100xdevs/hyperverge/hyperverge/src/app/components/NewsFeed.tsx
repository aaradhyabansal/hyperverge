export default function NewsFeed() {
  return (
    <div className="flex flex-col items-left p-5 h-screen">
      
      <h1 className="text-xl font-bold  text-white-center-400 p-4">News Feed</h1> {/* Updated styling */}
      
      {/* Twitter Feed Container */}
      <div className="w-[350px] h-[750px] overflow-y-scroll border border-gray-300 rounded-lg shadow-lg p-4 bg-white ml-2">
        <a
          className="twitter-timeline"
          href="https://twitter.com/BrutIndia?ref_src=twsrc%5Etfw"
        >
          Tweets by BrutIndia
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
        ></script>
      </div>
    </div>
  );
}
