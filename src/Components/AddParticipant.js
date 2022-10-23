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

    if (matchFound(participant.name)) return alert("Name already taken");

    listCopy.push(participant);
    props.setList(listCopy);
    setParticipant({ name: "", secretSanta: "" });
  }

  function matchFound(inputValue) {
    let matchFound = false;

    props.list.forEach((p) => {
      if (p.name.toLowerCase() === inputValue.toLowerCase()) matchFound = true;
    });

    return matchFound;
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
