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
        <img src={source} alt="navigate" width="20px" height="20px" />
      </section>
      {/* toggle menu component */}
      {!navopen && <Menu />}
    </section>
  );
}
