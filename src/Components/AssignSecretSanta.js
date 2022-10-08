import { useEffect, useState } from "react";

export default function AssignSecretSanta(props) {
  const [secretSantas, setSecretSantas] = useState([]);
  const [test, setTest] = useState([]);
  console.log("secretSantas: ", secretSantas);
  console.log("test: ", test);

  useEffect(() => {
    setSecretSantas(props.list);
  }, [props.list]);

  useEffect(() => {
    const newArray = [];

    while (newArray.length < props.list.length) {
      const randomInt = Math.floor(Math.random() * props.list.length);
      newArray.push(randomInt);
    }

    setTest(newArray);
  }, [props.list]);

  return (
    <div className="AssignSecretSanta">
      <button>Assign Secret Santa</button>
      <div>
        {props.list.length > 0
          ? `${test[0]}`
          : "Secret Santas can not be assigned"}
      </div>
    </div>
  );
}
