import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "atomic",
    age: 25,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <main>
        <div className="bg-black">
          <h1 className="bg-green-400 text-black p-4 rounded-xl m-auto max-w-fit flex ">
            Tailwind Tes
          </h1>
          <Card username="ReactJs" btnText="Click Me" />
          <Card username="Kaneki" btnText="Follow" />
        </div>
      </main>
    </>
  );
}

export default App;
