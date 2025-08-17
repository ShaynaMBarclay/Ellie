import { useState } from "react";

function TarotCard({ quote, imageFront, onFlipComplete }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    setTimeout(() => {
      onFlipComplete();
    }, 7000); 
  };

  return (
    <div className="card-wrapper">
      <div className="card-container" onClick={handleClick}>
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <div className="front">
            <img src={imageFront} alt="Tarot Card" />
          </div>
          <div className="back">
            <p>{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
