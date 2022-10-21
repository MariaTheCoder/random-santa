export default function ListSecretSantas(props) {
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

  return <div>{sortedList[0].secretSanta}</div>;
}
