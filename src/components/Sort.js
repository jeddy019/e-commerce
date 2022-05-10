function Sort({ selectedOrder, handleSort }) {
  return (
    <div className="sort">
      Sort by
      <select value={selectedOrder} onChange={handleSort}>
        <option value="">Select</option>
        <option value="lowest">Lowest to highest</option>
        <option value="highest">Highest to lowest</option>
      </select>
    </div>
  );
}

export default Sort;
