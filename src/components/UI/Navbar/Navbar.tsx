import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list flex gap-md">
        <li>
          <a href="/">Section 1</a>
        </li>
        <li>
          <a href="/">Section 2</a>
        </li>
        <li>
          <a href="/">Section 3</a>
        </li>
        <li>
          <a href="/">Section 4</a>
        </li>
        <li>
          <a href="/">Section 4</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
