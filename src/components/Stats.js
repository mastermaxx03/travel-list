export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list 🎬 👻 </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list and you have already packed{" "}
        {numPacked} of {numItems} items
      </em>{" "}
      <br></br>
      <em>
        {" "}
        {percentage === 100
          ? `You got Everything! Ready to go bitch 🛫`
          : `${percentage} % is complete `}
      </em>
    </footer>
  );
}
