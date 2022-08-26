import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Pagination(props) {
  const params = useParams();
  const page = parseInt(params.page) || 1;
  const links = [];

  for (var i=0 ; i<props.pages ; i++) {
    links.push(<Link key={`page${i}`} to={`page/${i+1}`} className="p-5">{i+1}</Link>);
  }

  return (
    <div className="flex text-indigo-900 font-bold my-8">
      {links}
      {page === props.pages ? "" : (<Link key="nextpage" to={`page/${1+page}`} className="p-5">&gt;</Link>)}
      <Link key="lastpage" to={`page/${props.pages}`} className="p-5">Última</Link>
    </div>
  );
}

export default Pagination;
