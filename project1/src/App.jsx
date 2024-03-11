import "./Main.css";
import "./Nav.css";
import Header from "./Components/Header";
import Audiophile from "./assets/audiophile.svg";
import Databiz from "./assets/databiz.svg";
import Maker from "./assets/maker.svg";
import Meet from "./assets/meet.svg";
import LeftMain from "./Components/LeftMain";
import RightMain from "./Components/RightMain";
import Hero from "./assets/hero.png";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <LeftMain
          imgAudio={Audiophile}
          imgData={Databiz}
          imgMaker={Maker}
          imgMeet={Meet}
        />
        <RightMain hero={Hero} />
      </main>
    </>
  );
}

export default App;
