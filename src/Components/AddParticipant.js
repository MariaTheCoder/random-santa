import { useState } from "react";

export default function AddParticipant() {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div className="AddParticipant">
      <input onChange={(event) => setName(event.target.value)}></input>
    </div>
  );
}
