import logo from "../../assets/images/omnifood-logo.png";
import "./FooterSection.scss";
import { SiInstagram, SiFacebook, SiTwitter } from "react-icons/si";

function FooterSection() {
  return (
    <section className="footer py-xxl">
      <div className="container grid-col-5">
        <div className="col-logo">
          <a href="/" className="footer-logo">
            <img src={logo} className="header-logo" alt="logo" />
          </a>

          <ul className="social-links">
            <li>
              <a href="/">
                <SiInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <SiFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <SiTwitter />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2027 by Omnifood, All Rights reserved.{" "}
          </p>
        </div>
        <div className="col-address">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p>23 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <nav className="col-nav">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="/">About Omnifood</a>
            </li>
            <li>
              <a href="/">For Business</a>
            </li>
            <li>
              <a href="/">Cook</a>
            </li>
            <li>
              <a href="/">Androind app</a>
            </li>
          </ul>
        </nav>
        <nav className="col-nav">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a href="/">Create account</a>
            </li>
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">iOS app</a>
            </li>
            <li>
              <a href="/">Androind app</a>
            </li>
          </ul>
        </nav>
        <nav className="col-nav">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a href="/">Recipe Directory</a>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Privacy and Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default FooterSection;
