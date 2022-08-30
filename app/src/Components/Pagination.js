import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Pagination(props) {
  const params = useParams();
  const page = parseInt(params.page) || 1;
  const links = [];

  for (var i=Math.max(0, page-2) ; i<Math.min(page+3, props.pages) ; i++) {
    links.push(<Link key={`page${i}`} to={`page/${i+1}`} className="p-5">{i+1}</Link>);
  }

  return (
    <div className="flex text-indigo-900 font-bold my-8">
      {page < 4 ? "" : (<Link key="firstpage" to={`page/${props.pages}`} className="p-5">Primeira</Link>)}
      {page === 1 ? "" : (<Link key="prevpage" to={`page/${page-1}`} className="p-5">&lt;</Link>)}
      {links}
      {page === props.pages ? "" : (<Link key="nextpage" to={`page/${page+1}`} className="p-5">&gt;</Link>)}
      {page === props.pages ? "" : (<Link key="lastpage" to={`page/${props.pages}`} className="p-5">Última</Link>)}
    </div>
  );
}

export default Pagination;
