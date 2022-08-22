function FilterButton(props) {
  const genreName = props.genre;
  return (
    <button className="bg-white text-black font-bold px-4 py-2 m-2 rounded">
      {genreName}
    </button>
  );
}

export default FilterButton;
