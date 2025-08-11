import logo from "../assets/logo.svg";

const Navigation = ({ account, setAccount }) => {
  return (
    <nav>
      <ul className="nav__links">
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Rent</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>

      <div className="nav__brand">
        <img src={logo} alt="logo" />
        <h1>Millow</h1>
      </div>

      <button className="nav__connect" type="button">
        0x0...
      </button>
    </nav>
  );
};

export default Navigation;
