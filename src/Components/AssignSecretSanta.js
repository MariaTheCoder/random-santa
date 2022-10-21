import { useState } from "react";
import ListSecretSantas from "./ListSecretSantas";

export default function AssignSecretSanta(props) {
  const [areSantasAssigned, setAreSantasAssigned] = useState(false);

  function clickHandler() {
    const participantsList = [...props.list];
    const randomOrder = [];
    const numberOfParticipants = props.list.length;

    while (participantsList.length) {
      let randomIndex = Math.floor(Math.random() * numberOfParticipants);

      while (randomOrder[randomIndex]) {
        randomIndex = Math.floor(Math.random() * numberOfParticipants);
      }

      randomOrder[randomIndex] = participantsList.shift();
    }

    for (let i = 0; i < randomOrder.length; i++) {
      if (i === randomOrder.length - 1) {
        randomOrder[i].secretSanta = randomOrder[0].name;
        continue;
      }
      randomOrder[i].secretSanta = randomOrder[i + 1].name;
    }
    props.setList(randomOrder);
    setAreSantasAssigned(true);
  }

  return (
    <div className="AssignSecretSanta">
      {areSantasAssigned ? (
        <button disabled onClick={clickHandler}>
          Assign Secret Santa
        </button>
      ) : (
        <button onClick={clickHandler}>Assign Secret Santa</button>
      )}
      <div>
        {props.list.length > 0 ? null : "Secret Santas can not be assigned"}
        {areSantasAssigned ? <ListSecretSantas list={props.list} /> : null}
      </div>
    </div>
  );
}
