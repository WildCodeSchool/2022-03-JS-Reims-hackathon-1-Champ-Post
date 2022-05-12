import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compost from "./pages/Compost";
import Map from "./pages/Map";
import Panel from "./pages/Panel";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import QrCode from "./components/QrCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
        <Route path="compost" element={<Compost />} />
        <Route path="panel" element={<Panel />} />
        <Route path="qrCode" element={<QrCode />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
