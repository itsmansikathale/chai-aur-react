import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../../learn-react/src/components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"mansi",
    age:37
  }
  let newArr=[1,2,3]


  return (
    <>
      <h1 className="bg-yellow-400 text-black p-4 rounded-xl mb-4">Test Tailwind</h1>
      <Card username="mansi" btnText="Click Me" />
      <Card username="Hello" />
 
    </>
  );
}

export default App;
