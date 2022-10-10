import "./HeaderSection.scss";
import logo from "../../assets/images/omnifood-logo.png";
import Navbar from "../../components/UI/Navbar/Navbar";

function HeaderSection() {
  return (
    <header className="header flex justify-content-between align-items-center bg-tint">
      <img src={logo} className="header-logo" alt="logo" />
      <Navbar />
    </header>
  );
}

export default HeaderSection;
