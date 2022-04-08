import "./menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <section className="menu--section">
      <h1>menu</h1>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </section>
  );
}
