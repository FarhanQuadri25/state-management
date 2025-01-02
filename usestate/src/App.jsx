import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [list, setList] = useState(["apple", "banana", "orange"]);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevState) => [...prevState, input]);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleClick}>Count = {count}</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
