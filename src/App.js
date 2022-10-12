import { useState } from "react";
import "./App.css";
import AddParticipant from "./Components/AddParticipant";
import Participants from "./Components/Participants";
import AssignSecretSanta from "./Components/AssignSecretSanta";

export default function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <AddParticipant list={list} setList={setList} />
      <Participants list={list} />
      <AssignSecretSanta list={list} setList={setList} />
    </div>
  );
}
