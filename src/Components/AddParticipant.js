import { useState } from "react";

export default function AddParticipant(props) {
  const [participant, setParticipant] = useState({ name: "", secretSanta: "" });

  function changeHandler(event) {
    const participantCopy = { ...participant };
    participantCopy.name = event.target.value;
    setParticipant(participantCopy);
  }

  function clickHandler() {
    const listCopy = [...props.list];
    listCopy.push(participant);
    props.setList(listCopy);
    setParticipant({ name: "", secretSanta: "" });
  }

  return (
    <div className="AddParticipant">
      <input
        value={participant.name}
        onChange={(event) => {
          changeHandler(event);
        }}
      ></input>
      <button onClick={clickHandler}>Add to list</button>
    </div>
  );
}
