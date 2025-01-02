import { useReducer } from "react";

const App = () => {
  const initialState = {
    names: ["farhan", "rehan", "ayan"],
    name: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name], name: "" };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="new">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button type="submit" onClick={() => dispatch({ type: "ADD_NAME" })}>
        Submit
      </button>
      <ul>
        {state.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
