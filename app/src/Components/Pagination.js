import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Pagination({ pages }) {
  const params = useParams();
  const query = useQuery();
  const page = parseInt(params.page) || 1;
  const links = [];

  const queryString = query.get("genres") ? `?genres=${query.get("genres")}` : '';

  for (var i=Math.max(0, page-2) ; i<Math.min(page+3, pages) ; i++) {
    links.push(<Link key={`page${i}`} to={`page/${i+1}/${queryString}`} className="p-5">{i+1}</Link>);
  }

  return (
    <div className="flex text-indigo-900 font-bold my-8">
      {page < 4 ? "" : (<Link key="firstpage" to={`page/1/${queryString}`} className="p-5">Primeira</Link>)}
      {page === 1 ? "" : (<Link key="prevpage" to={`page/${page-1}/${queryString}`} className="p-5">&lt;</Link>)}
      {links}
      {page === pages ? "" : (<Link key="nextpage" to={`page/${page+1}/${queryString}`} className="p-5">&gt;</Link>)}
      {page === pages ? "" : (<Link key="lastpage" to={`page/${pages}/${queryString}`} className="p-5">Última</Link>)}
    </div>
  );
}

export default Pagination;
