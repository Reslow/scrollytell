import "../styles/navbar.css";
export default function Navbar() {
  const open = false;
  let iconSource = "";
  if (open === true) {
    iconSource = "/../assets/burgerOpen.png";
  } else {
    iconSource = "../assets/burgerClosed.png";
  }
  console.log(iconSource);
  return (
    <section>
      <section className="nav">
        <img
          src="/assets/burgerOpen.png"
          alt="navigate"
          width="20px"
          height="20px"
        />
      </section>
    </section>
  );
}
