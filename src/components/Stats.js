export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You have packed everything! Ready to go ✈️"
          : `💼You have ${numItems} items on your list, and you already packed 
          ${numPacked} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
