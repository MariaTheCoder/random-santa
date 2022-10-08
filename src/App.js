import { useState } from "react";
import "./App.css";
import AddParticipant from "./Components/AddParticipant";
import Participants from "./Components/Participants";

export default function App() {
  const [list, setList] = useState([]);
  console.log("list: ", list);
  return (
    <div className="App">
      <AddParticipant list={list} setList={setList} />
      <Participants list={list} />
    </div>
  );
}
