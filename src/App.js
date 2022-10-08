import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <input onChange={(event) => setName(event.target.value)}></input>
    </div>
  );
}
