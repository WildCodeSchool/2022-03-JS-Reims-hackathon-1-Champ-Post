import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compost from "./pages/Compost";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import QrCode from "./components/QrCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compost" element={<Compost />} />
        <Route path="qrCode" element={<QrCode />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
