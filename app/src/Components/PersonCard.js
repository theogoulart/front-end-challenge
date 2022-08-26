const URL = "https://image.tmdb.org/t/p/original";

function PersonCard(props) {
  const person = props.person;

  return (
    <div className="shrink-0 p-2 border rounded shadow mr-4">
      <img className="rounded mb-4" width="175" height="222" alt="" src={URL + person.profile_path} />
      <div className="text-neutral-900 font-bold text-lg">{person.name}</div>
      <div className="text-neutral-900 text-base">{person.character}</div>
    </div>
  );
}

export default PersonCard;
