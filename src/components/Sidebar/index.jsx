// ******TO DO******
// - Change colors (optional)

import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="lamdev" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#F9FCEF" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#F9FCEF" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#F9FCEF" />
        </NavLink>
      </nav>

      {/* Social media links  */}
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/OumarLAM/Oumar_LAM"
          >
            <FontAwesomeIcon icon={faGithub} color="#F9FCEF" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/oumarlam_fcb"
          >
            <FontAwesomeIcon icon={faXTwitter} color="#F9FCEF" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oumar-lam-692b641a7/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#F9FCEF" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
