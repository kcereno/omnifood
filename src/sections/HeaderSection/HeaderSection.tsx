import "./HeaderSection.scss";
import logo from "../../assets/images/omnifood-logo.png";

function HeaderSection() {
  return (
    <header className="header flex justify-content-between align-items-center bg-tint">
      <img src={logo} className="header-logo" alt="logo" />
      <nav className="header-nav">Navigation</nav>
    </header>
  );
}

export default HeaderSection;
