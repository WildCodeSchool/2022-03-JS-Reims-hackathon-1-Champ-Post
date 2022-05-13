import React from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

export default function QrCode() {
  return (
    <>
      <div className="trichecentre">
        <Link to="/">
          <img className="logoComp" src="src/assets/logo1.png" alt="logo" />
        </Link>
      </div>
      <div className="divcam">
        <Webcam className="cam" width={300} />
      </div>
      <Link to="home">
        <div className="hitbox" />
      </Link>
    </>
  );
}
