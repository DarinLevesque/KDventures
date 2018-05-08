import React from "react";
import Link from "gatsby-link";
import { pushRotate as Menu } from "react-burger-menu";
import Headroom from "react-headroom";

import github from "../img/github-icon.svg";
import logo from "../img/DarinLWEBP.webp";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "20px",
    right: "20px",
    top: "20px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#777777"
  },
  bmMenu: {
    background: "#e0e0e0",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div>
        <Menu
          styles={styles}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <aside className="menu">
            <Link id="home" to="/" onClick={() => this.closeMenu()}>
              <i class="fas fa-home" />
            </Link>

            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <Link id="about" to="/about" onClick={() => this.closeMenu()}>
                  <i class="fas fa-user" /> About Me
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()}>
                  <i class="fas fa-cogs" /> Projects
                </Link>
              </li>
            </ul>
            <Link
              to="/blog"
              className="menu-label"
              onClick={() => this.closeMenu()}
            >
              Blog
            </Link>
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={() => this.closeMenu()}>
                  <i class="fas fa-fighter-jet" /> Professional
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()}>
                  <i class="fas fa-users" /> Family
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()}>
                  Invitations
                </Link>
              </li>
            </ul>
            <p className="menu-label">Resume</p>
            <ul className="menu-list">
              <li>
                <Link to="/education" onClick={() => this.closeMenu()}>
                  <i class="fas fa-graduation-cap" /> Education
                </Link>
              </li>
              <li>
                <Link to="/experience" onClick={() => this.closeMenu()}>
                  <i class="fas fa-briefcase" /> Experience
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => this.closeMenu()}>
                  <i class="fas fa-chart-line" /> Skills
                </Link>
              </li>
            </ul>
            <ul className="menu-list">
              <li>
                <Link
                  id="contact"
                  href="/contact"
                  onClick={() => this.closeMenu()}
                >
                  <i class="fas fa-envelope" /> Contact
                </Link>
              </li>
            </ul>
          </aside>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
