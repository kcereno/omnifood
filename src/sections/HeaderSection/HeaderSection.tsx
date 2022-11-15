import "./HeaderSection.scss";
import logo from "../../assets/images/omnifood-logo.png";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);

  let menuStatus = showMenu ? "nav-open" : null;

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={`header  d-flex justify-content-between align-items-center bg-tint px-md  ${menuStatus}`}
    >
      <a href="/">
        <img src={logo} className="header-logo" alt="logo" />
      </a>
      {/* Navbar */}
      <nav className="main-nav ">
        <ul className="main-nav-list d-flex align-items-center flex-gap-sm">
          <li>
            <a className="main-nav-link" href="#how">
              How It Works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link main-nav-cta bg-primary" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav">
        <IoMenuSharp
          className="icon-mobile-nav"
          name="menu-outline"
          onClick={handleOpenMenu}
        />
        <IoCloseOutline
          className="icon-mobile-nav"
          name="close-outline"
          onClick={handleCloseMenu}
        />
      </button>
    </header>
  );
}

export default HeaderSection;
