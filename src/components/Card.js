import { useState } from "react";

import star from "../resources/star.svg";
import starFilled from "../resources/star-filled.svg";

import "./card.css";

//<img data-js="star-icon" src={star} alt="Star Icon" />

export function Card() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div className="card">
        <button
          className="card_star"
          type="button"
          onClick={() => {
            setLoggedIn(!loggedIn);
          }}
        >
          {loggedIn ? <StarFilled /> : <Star />}
        </button>
        <date className="card_date" type="date">
          FEB 27, 2028
        </date>
        <section className="card_title" type="text">
          <h3>"Title"</h3>
        </section>
        <p>
          Si sine Causa? eque fuerit causa mox videro; interea hoc tembo, si
          mihni. Et equidem de repellere, idque focere sic omne animal, sinums
          atque
        </p>

        <p className="card_bottom_line"></p>
      </div>
    </>
  );
}

function Star() {
  return (
    <>
      <img src={star} alt="Star Icon" />
    </>
  );
}

function StarFilled() {
  return (
    <>
      <img src={starFilled} alt="Star filled Icon" />
    </>
  );
}
