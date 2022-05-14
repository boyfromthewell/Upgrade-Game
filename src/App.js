import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayGame from "./components/PlayGame";
import SelectWeapon from "./components/SelectWeapon";
import Ranking from "./components/Ranking";
import ReactAudioPlayer from "react-audio-player";
import BGM from "./BGM/elven_guard_old.ogg";

function App() {
  return (
    <>
      <ReactAudioPlayer src={BGM} controls autoPlay={true} loop={true} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-weapon" element={<SelectWeapon />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
