import { useEffect, useState } from "react";
import "./App.css";
import AddParticipant from "./Components/AddParticipant";
import Participants from "./Components/Participants";
import AssignSecretSanta from "./Components/AssignSecretSanta";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    list.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }, [list]);

  return (
    <div className="App">
      <AddParticipant list={list} setList={setList} />
      <Participants list={list} />
      <AssignSecretSanta list={list} setList={setList} />
    </div>
  );
}
