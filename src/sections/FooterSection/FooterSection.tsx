import logo from "../../assets/images/omnifood-logo.png";
import "./FooterSection.scss";
import { SiInstagram, SiFacebook, SiTwitter } from "react-icons/si";

function FooterSection() {
  return (
    <section className="footer py-xxl">
      <div className="container grid-footer">
        <div className="col-logo">
          <a href="/" className="footer-logo mb-md">
            <img src={logo} className="header-logo" alt="logo" />
          </a>

          <ul className="social-links">
            <li>
              <a href="/" className="footer-link">
                <SiInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                <SiFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                <SiTwitter className="social-icon" />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2027 by Omnifood,
            <br /> All Rights reserved.
          </p>
        </div>
        <div className="col-address">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p className="mb-sm">
              23 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a href="tel:415-201-6370" className="footer-link">
                415-201-6370
              </a>
              <br />
              <a href="mailto:hello@omnifood.com" className="footer-link">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="col-nav">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="/" className="footer-link">
                About Omnifood
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Cook
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Androind app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="col-nav">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a href="/" className="footer-link">
                Create account
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                iOS app
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Androind app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="col-nav">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a href="/" className="footer-link">
                Recipe Directory
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Privacy and Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default FooterSection;
