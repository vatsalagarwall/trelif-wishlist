import React from "react";
import arrow from "./left-arrow.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <span className="navbar-brand mb-0 h1 navbar">
          <div className="navbar-new">
            <button className="navbar-button">
              <img src={arrow} className="arrow-img" alt="Arrow" />
            </button>
            <span className="navbar-myWishlist">
              <span className="navbar-my">
                My
                <span className="navbar-wishlist"> Wishlist</span>
              </span>
            </span>
          </div>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
