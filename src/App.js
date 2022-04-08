import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Error from "./views/Error";
import About from "./views/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="*" element={Error} />
      </Routes>
    </div>
  );
}

export default App;
