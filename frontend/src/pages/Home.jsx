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
      <p>hello</p>
      <Map />
    </>
  );
}
