import { Link } from "react-router-dom";
import Map from "../components/Map";

export default function SecondHome() {
  return (
    <>
      <Link to="/panel">
        <img src="/src/assets/147142.png" alt="avatar" className="avatar" />
      </Link>
      <Link to="qrcode">
        <img
          src="/src/assets/Screenshot_2022-05-12_at_15-10-01_Barcode_Scanner_Icon_Images___Parcourir_13_189_le_catalogue_de_photos_vecteurs_et_vidéos-removebg-preview.png"
          alt="QR code scanner"
          className="qrcode"
        />
      </Link>
      <progress max="100" value="75" />
      <p>Maitre du Compostage</p>
      <div className="badgecheck">
        <img src="src/assets/badge/pigeon.png" alt="badge pigeon" />
        <img src="src/assets/badge/lune.png" alt="badge lune" />
        <img src="src/assets/badge/feuille.png" alt="badge feuille" />
        <img src="src/assets/badge/arbre.png" alt="badge arbre" />
      </div>
      <img
        src="src/assets/badge/badgecheck.png"
        alt="badge check"
        className="imgbadgecheck"
      />
      <div className="badgenocheck">
        <img src="src/assets/badge/poussin.png" alt="badge poussin" />
        <img src="src/assets/badge/hibou.png" alt="badge hibou" />
        <img src="src/assets/badge/tournesol.png" alt="badge tournesol" />
      </div>
      <img
        src="src/assets/badge/badgenocheck.png"
        alt="badge no check"
        className="imgbadgenocheck"
      />
      <p>Historique</p>
      <div className="histoirearray">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Quantités</th>
              <th>Lieu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 01/05 </td>
              <td> 350 G </td>
              <td> REIMS </td>
            </tr>
            <tr>
              <td>11/03</td>
              <td>800 G</td>
              <td>REIMS</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Où nous trouver ?</p>
      <Map />
    </>
  );
}
