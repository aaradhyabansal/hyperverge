import SmallCard from "./components/SmallCard";
import NewsFeed from "./components/NewsFeed";
export default function Home() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 bg-gray-900 text-white ">
      <div className="col-span-1">
        <NewsFeed/>
      </div>

      <div className="col-span-2">
        <SmallCard />
      </div>
    </div>
  );
}
