import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto m-5 text-2xl ">
      <Link className="mx-3 hover:underline" to="/">
        Home
      </Link>
      <Link className="mx-3 hover:underline" to="/albums">
        Albums
      </Link>
      <Link className="mx-3 hover:underline" to="/artists">
        Artists
      </Link>
      <Link className="mx-3 hover:underline" to="/login">
        Log in
      </Link>
    </div>
  );
};

export default Navbar;
