import { useState } from "react";
import "./App.css";
import AddParticipant from "./Components/AddParticipant";

export default function App() {
  const [list, setList] = useState([]);
  console.log("list: ", list);
  return (
    <div className="App">
      <AddParticipant list={list} setList={setList} />
    </div>
  );
}
