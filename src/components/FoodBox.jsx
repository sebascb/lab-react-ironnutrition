import React from "react";
import { useState } from "react";

function FoodBox (props) {

  const {food, buttonClick} = props;
  const [quanty, setQuanty] = useState(0);

  function handleQuanty(event) {
    setQuanty(event.target.value)
    console.log(quanty);
  }

  return (

    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt="foodImage" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" value={quanty} onChange={handleQuanty} type="number" />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => { buttonClick(food, quanty) }}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FoodBox;