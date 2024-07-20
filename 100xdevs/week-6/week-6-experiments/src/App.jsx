import axios from "axios";
import { memo, useEffect, useState, useMemo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inputFunction = useCallback(() => {
    console.log("inputFunction");
  }, []);
  return (
    <div>
      <Buttoncomponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter({count})
      </button>
    </div>
  );
}

const Buttoncomponent = memo(({ inputFunction }) => {
  console.log("Child Render");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

export default App;
