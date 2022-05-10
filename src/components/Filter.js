import { useGlobalContext } from "./context";

function Filter() {
  const { data, selectedSizes, setSelectedSizes } = useGlobalContext();

  const reducer = (acc, val) => {
    acc = acc.concat(val.availableSizes);
    return acc;
  };

  let sizes = data.reduce(reducer, []);
  let uniqueSizes = [...new Set(sizes)];

  const handleClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((prevState) => {
        return prevState.filter((s) => s !== size);
      });
    } else {
      setSelectedSizes((prevState) => {
        return prevState.concat(size);
      });
    }
  };

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => {
          return (
            <span
              key={size}
              className={`size ${selectedSizes.includes(size) ? "active" : ""}`}
              onClick={() => handleClick(size)}
            >
              {size}
            </span>
          );
        })}
      </div>
    </aside>
  );
}

export default Filter;
