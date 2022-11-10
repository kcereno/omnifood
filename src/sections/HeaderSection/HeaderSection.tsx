import "./HeaderSection.scss";
import logo from "../../assets/images/omnifood-logo.png";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";

function HeaderSection() {
  return (
    <header className="header d-flex justify-content-between align-items-center bg-tint px-md nav-open">
      <a href="/">
        <img src={logo} className="header-logo" alt="logo" />
      </a>
      {/* Navbar */}
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
      <button className="btn-mobile-nav">
        <IoMenuSharp className="icon-mobile-nav" name="menu-outline" />
        <IoCloseOutline className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
}

export default HeaderSection;
