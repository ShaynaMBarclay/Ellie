import { useState } from "react";
import "./styles/App.css";
import TarotCard from "./components/TarotCard";
import NightElfScreen from "./components/NightElfScreen";
import tarotImage from "./assets/star.jpeg";

function App() {
  const [showNightElf, setShowNightElf] = useState(false);

  return (
    <div className="screen-container">
      <div className={`screen ${showNightElf ? "fade-out" : "fade-in"}`}>
        <TarotCard
          imageFront={tarotImage}
          quote="through healing and inspiration to overcome the challenges in life, I will guide you to your purpose and inner self. love grandma 💖"
          onFlipComplete={() => setShowNightElf(true)}
        />
      </div>

      <div className={`screen ${showNightElf ? "fade-in" : "fade-out"}`}>
        <NightElfScreen />
      </div>
    </div>
  );
}

export default App;
