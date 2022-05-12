import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="compost">compost</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
