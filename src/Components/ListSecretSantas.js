import { useState } from "react";

export default function ListSecretSantas(props) {
  const [name, setName] = useState("");

  function findSecretSanta() {
    let match = 0;

    props.list.forEach((participant) => {
      if (participant.name.toLowerCase() === name.toLocaleLowerCase()) match++;
    });

    if (match === 0) {
      alert("No matches found");
    }

    // if (match > 1) {
    //   alert("Avoid giving participants the same name");
    // }
  }

  const sortedList = props.list.sort((a, b) => {
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
  console.log("sorted: ", sortedList);

  return (
    <div>
      <input
        onKeyUp={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={findSecretSanta}>Display secret Santa</button>
    </div>
  );
}
