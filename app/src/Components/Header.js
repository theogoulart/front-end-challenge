import logo from '../vector.svg'

function Header() {
  return (
    <header className="bg-violet-custom p-4">
      <section className="flex justify-center">
        <div className="w-full max-w-7xl">
          <img src={logo} alt="TMDB Logo" />
        </div>
      </section>
    </header>
  );
}

export default Header;
