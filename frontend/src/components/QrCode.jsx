import React from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function QrCode() {
  const promise = () => {
    // eslint-disable-next-line no-unused-vars
    const resolveafter3sec = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
    toast.promise(resolveafter3sec, {
      pending: "Validation en cours ...",
      success: "Dépot validé !",
      error: "Dépot rejeté !",
    });
  };

  return (
    <>
      <div className="trichecentre">
        <Link to="/home">
          <img className="logoComp" src="src/assets/logo1.png" alt="logo" />
        </Link>
      </div>
      <div className="divcam">
        <Webcam className="cam" width={300} />
      </div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className="hitbox" type="button" onClick={promise} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
