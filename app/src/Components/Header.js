import { Link } from "react-router-dom";
import logo from '../vector.svg'

function Header() {
  return (
    <header className="bg-violet-custom p-4">
      <section className="flex justify-center items-center">
        <div className="w-full max-w-7xl">
          <Link className="flex justify-center md:justify-start" to="/">
            <img width="185" height="24" src={logo} alt="TMDB Logo" />
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
