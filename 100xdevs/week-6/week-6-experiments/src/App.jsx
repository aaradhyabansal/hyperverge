import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState(1);
  let arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((val) => {
        return (
          <button
            key={val}
            className="h-300 w-300"
            onClick={() => {
              setId(val);
              console.log(id);
            }}
          >
            {val}
          </button>
        );
      })}
      <TODO id={id} />
    </div>
  );
}
function TODO({ id }) {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodos(response.data.todo);
      });
  }, []);
  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}
export default App;
