import React from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

export default function QrCode() {
  return (
    <>
      <div className="divcam">
        <Webcam className="cam" width={300} />
      </div>
      <Link to="/">
        <div className="hitbox" />
      </Link>
    </>
  );
}
