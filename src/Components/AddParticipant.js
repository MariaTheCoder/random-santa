import { useState } from "react";

export default function AddParticipant(props) {
  const [name, setName] = useState("");

  return (
    <div className="AddParticipant">
      <input onChange={(event) => setName(event.target.value)}></input>
      <button onClick={() => props.setList([...props.list, name])}>
        Add to list
      </button>
    </div>
  );
}
