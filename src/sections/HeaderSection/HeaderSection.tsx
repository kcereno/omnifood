import "./HeaderSection.scss";
import logo from "../../assets/images/omnifood-logo.png";
import Navbar from "../../components/UI/Navbar/Navbar";

function HeaderSection() {
  return (
    <header className="header d-flex justify-content-between align-items-center bg-tint">
      <a href="/">
        <img src={logo} className="header-logo" alt="logo" />
      </a>
      <Navbar />
    </header>
  );
}

export default HeaderSection;
