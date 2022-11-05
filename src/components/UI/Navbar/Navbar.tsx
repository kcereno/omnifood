import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list d-flex align-items-center flex-gap-sm">
        <li>
          <a className="navbar-link" href="/">
            How It Works
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Meals
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Testimonials
          </a>
        </li>
        <li>
          <a className="navbar-link" href="/">
            Pricing
          </a>
        </li>
        <li>
          <a className="navbar-link navbar-cta bg-primary" href="/">
            Try for free
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
