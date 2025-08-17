import catImage from "../assets/cat.png";
import topCatImage from "../assets/nelfsaber.png";
import questIcon from "../assets/questicon.png";
import leoCat from "../assets/blackcat.png";

function NightElfScreen() {
  return (
    <div className="night-elf-screen">
      <h1 className="night-elf-title">
        May the forest sing and the Wisps guide your birthday path 🌿🌙
      </h1>

      <img src={catImage} alt="Crawling Cat" className="crawling-cat" />
      <img src={topCatImage} alt="Top Cat" className="top-cat" />

      <div className="quest-wrapper">
        <img src={questIcon} alt="Quest Icon" className="quest-icon" />
        <div className="chat-bubble">
          <img src={leoCat} alt="Leo the Cat" className="chat-cat" />
          <span>
            Meow! Happy Birthday, my favorite human! Love, Leo 🐾🐾🐾
          </span>
        </div>
      </div>

      {/* Wisps */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className={`wisp wisp${i + 1}`} />
      ))}

      {/* Falling leaves */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="leaf"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default NightElfScreen;
