import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayGame from "./components/PlayGame";
import SelectWeapon from "./components/SelectWeapon";
import Ranking from "./components/Ranking";
import ReactAudioPlayer from "react-audio-player";
import BGM from "./BGM/elven_guard_old.ogg";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <ReactAudioPlayer src={BGM} autoPlay={true} controls loop={true} />
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-weapon" element={<SelectWeapon />} />
            <Route path="/play" element={<PlayGame />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
