import "./card.css";

export function Card() {
  return (
    <>
      <div className="card">
        <button className="card_star" type="submit" data-js="star">
          <img
            data-js="star-icon"
            src=".../resources/star.svg"
            alt="Star Icon"
          />
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
