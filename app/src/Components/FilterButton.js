function FilterButton({ isSelected, genre, clickHandler }) {
  const styleClass = isSelected ? "filter-btn pr-10" : "bg-white text-black";

  return (
    <button onClick={() => {clickHandler()}} className={`${styleClass} font-bold px-4 py-2 my-2 mr-4 rounded`}>
      {genre.name}
    </button>
  );
}

export default FilterButton;