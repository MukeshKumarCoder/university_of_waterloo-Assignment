import { useState } from "react";
import "./App.css";
import Start from "./pages/start/Start";
import Next from "./pages/next/Next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yes from "./pages/yes/Yes";
import Play from "./pages/play/Play"
import GamePage from "./pages/gamePage/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/next" element={<Next/>} />
        <Route path="/yes" element={<Yes/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/gamepage" element={<GamePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
