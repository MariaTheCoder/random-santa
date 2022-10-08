export default function Participants(props) {
  return (
    <ul className="Participants">
      {props.list.length > 0
        ? props.list?.map((p, index) => <li key={index}>{p.name}</li>)
        : "Currently no participants"}
    </ul>
  );
}
