import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

export default function AddParticipant(props) {
  const [name, setName] = useState("");

  function clickHandler() {
    const listCopy = [...props.list];
    listCopy.push(name);
    props.setList(listCopy);
  }

  return (
    <div className="AddParticipant">
      <input onChange={(event) => setName(event.target.value)}></input>
      <button onClick={clickHandler}>Add to list</button>
    </div>
  );
}
