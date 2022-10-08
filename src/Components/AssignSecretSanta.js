import { useEffect, useState } from "react";

export default function AssignSecretSanta(props) {
  const [secretSantas, setSecretSantas] = useState([]);
  console.log("secretSantas: ", secretSantas);

  useEffect(() => {
    setSecretSantas(props.list);
  }, [props]);

  return (
    <div className="AssignSecretSanta">
      <button>Assign Secret Santa</button>
    </div>
  );
}
