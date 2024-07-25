export default function NewsFeed() {
  return (
    <div>
      News Feed
      <div className="w-350 h-750 overflow-y-scroll border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
        <a
          className="twitter-timeline"
          href="https://twitter.com/BrutIndia?ref_src=twsrc%5Etfw"
        >
          Tweets by BrutIndia
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
          className="overflow-y:scroll"
        ></script>
      </div>
    </div>
  );
}
