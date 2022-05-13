import { Link } from "react-router-dom";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Link to="qrcode">
        <img
          src="/src/assets/Screenshot_2022-05-12_at_15-10-01_Barcode_Scanner_Icon_Images___Parcourir_13_189_le_catalogue_de_photos_vecteurs_et_vidéos-removebg-preview.png"
          alt="QR code scanner"
          className="qrcode"
        />
      </Link>
      <div className="top-home">
        <Link to="panel">
          <img src="/src/assets/147142.png" alt="avatar" className="avatar" />
        </Link>
        <progress max="100" value="75" />
        <p>Maitre du Compostage</p>
      </div>
      <Link to="panel">
        <div className="badgecheck">
          <span className="hovertext" data-hover="Atteint le niveau 2">
            <img src="src/assets/badge/poussin.png" alt="badge poussin" />
          </span>
          <span className="hovertext" data-hover="Compost la nuit !">
            <img src="src/assets/badge/lune.png" alt="badge lune" />
          </span>
          <span className="hovertext" data-hover="Premier Compost">
            <img src="src/assets/badge/feuille.png" alt="badge feuille" />
          </span>
        </div>
      </Link>
      <img
        src="src/assets/badge/badgecheck.png"
        alt="badge check"
        className="imgbadgecheck"
      />
      <div className="badgenocheck">
        <span className="hovertext" data-hover="Atteint le niveau 5">
          <img src="src/assets/badge/pigeon.png" alt="badge pigeon" />
        </span>
        <img src="src/assets/badge/hibou.png" alt="badge hibou" />
        <span className="hovertext" data-hover="5 compost (4/5)">
          <img src="src/assets/badge/arbre.png" alt="badge arbre" />
        </span>
      </div>
      <img
        src="src/assets/badge/badgenocheck.png"
        alt="badge no check"
        className="imgbadgenocheck"
      />
      <div className="histo">
        <p className="phisto">Historique</p>
        <div className="histoirearray">
          <table>
            <tr>
              <th>Date</th>
              <th>Quantités</th>
              <th>Lieu</th>
            </tr>
            <tr>
              <td> 01/05 </td>
              <td> 350 G </td>
              <td> REIMS </td>
            </tr>
            <tr>
              <td>21/03</td>
              <td>800 G</td>
              <td>REIMS</td>
            </tr>
            <tr>
              <td>30/01</td>
              <td>600 G</td>
              <td>REIMS</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mapping">
        <p className="pmapping">Où nous trouver ?</p>
        <div className="trichecentre2">
          <Map />
        </div>
      </div>
    </>
  );
}
