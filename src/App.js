import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section>MainSection</section>
      <footer>Here is my footer</footer>
      <Routes>
        <Route path="/" element="Home" />
        <Route path="/about" element="About" />
        <Route path="*" element="Error" />
      </Routes>
    </div>
  );
}

export default App;
