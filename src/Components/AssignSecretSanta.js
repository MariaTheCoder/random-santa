import ListSecretSantas from "./ListSecretSantas";

export default function AssignSecretSanta(props) {
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
  }

  return (
    <div className="AssignSecretSanta">
      <button onClick={clickHandler}>Assign Secret Santa</button>
      <div>
        {props.list.length > 0 ? (
          <ListSecretSantas list={props.list} />
        ) : (
          "Secret Santas can not be assigned"
        )}
      </div>
    </div>
  );
}
