import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur Code | Mansi V. Kathale</h1>
      <h2>Value: </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  );
}

export default App;
