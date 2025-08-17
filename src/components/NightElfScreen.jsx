
import catImage from "../assets/cat.png";

function NightElfScreen() {
  return (
    <div className="night-elf-screen">
      <h1>Welcome to your Night Elf Birthday World! 🌙</h1>
      <img src={catImage} alt="Crawling Cat" className="crawling-cat" />
    </div>
  );
}

export default NightElfScreen;