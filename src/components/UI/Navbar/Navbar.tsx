import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list flex align-items-center flex-gap-s">
        <li>
          <a className="navbar-link" href="/">
            Section 1
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Section 2
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Section 3
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Section 4
          </a>
        </li>
        <li>
          <a className="navbar-link navbar-cta bg-primary" href="/">
            Section 5
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
