import { useState, useContext } from "react";
import { DataContext } from "./contexts/DataContext.jsx";
import FightContextProvider from "./contexts/FightContext.jsx";
import "./App.css";
import ListView from "./components/ListView.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LastWinner from "./components/LastWinner.jsx";
import Opponents from "./components/Arena/Opponents.jsx";
import Arena from "./components/Arena/Arena.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FightContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ListView />} />
            <Route path="/arena" element={<Opponents />} />
            <Route path="/winner" element={<LastWinner />} />
            <Route path="/pokefight" element={<Arena />} />
          </Routes>
          <Footer />
        </FightContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
