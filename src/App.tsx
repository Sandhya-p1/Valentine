import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Accepted from "./pages/accepted";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accepted" element={<Accepted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
