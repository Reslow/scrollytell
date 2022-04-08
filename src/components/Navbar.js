import "../styles/navbar.css";
import closed from "../assets/burgerclosed.png";
import open from "../assets/burgeropen.png";
import { useState } from "react";
import Menu from "./Menu";
export default function Navbar() {
  const [navopen, setNavOpen] = useState(true);
  function toggleMenu() {
    setNavOpen(!navopen);
  }
  let source = open;
  if (!navopen) {
    source = closed;
  }

  return (
    <section>
      <section className="nav" onClick={toggleMenu}>
        <img src={source} alt="navigate" width="40px" height="40px" />
      </section>
      {/* toggle menu component */}

      <section className={!navopen ? "menuOpen" : "menuClosed"}>
        <Menu />
      </section>
    </section>
  );
}
