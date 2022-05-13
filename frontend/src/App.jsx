import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compost from "./pages/Compost";
import Home from "./pages/Home";
import "./App.css";
import QrCode from "./components/QrCode";
import SecondHome from "./pages/SecondHome";
import Panel from "./pages/Panel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<SecondHome />} />
        <Route path="/compost" element={<Compost />} />
        <Route path="/qrCode" element={<QrCode />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
}

export default App;
