import React from "react";
import { data } from "./CardData";
import "./Cards.css";
import trash from "./trash.png";

function Card() {
  return (
    <div className="cards">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="image-container">
            <img src={item.image} className="card-img-top" alt="..." />
            <button className="trash-button">
              <img className="trash-image" src={trash} alt="Trash" />
            </button>
          </div>
          <div className="card-body">
            <div className="card-title-price">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-price">₹{item.price}</p>
            </div>
            <hr />
            <div className="add-to-cart">
              <button className="btn">Add to Cart</button>
              {/* add logo */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
