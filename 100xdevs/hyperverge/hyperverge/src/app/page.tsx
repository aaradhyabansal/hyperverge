import SmallCard from "./components/SmallCard";
export default function Home() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="col-span-1">Hi there</div>

      <div className="col-span-2">
        <SmallCard />
      </div>
    </div>
  );
}
