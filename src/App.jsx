
import { useState } from "react";
import "./styles/App.css";
import TarotCard from "./components/TarotCard";
import NightElfScreen from "./components/NightElfScreen";
import tarotImage from "./assets/star.jpeg";

function App() {
  const [showNightElf, setShowNightElf] = useState(false);

  return (
    <div>
      {!showNightElf ? (
        <TarotCard
          imageFront={tarotImage}
          quote="Happy Birthday! Love, Grandma 💖"
          onFlipComplete={() => setShowNightElf(true)}
        />
      ) : (
        <NightElfScreen />
      )}
    </div>
  );
}

export default App;
