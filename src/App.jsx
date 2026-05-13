import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PlayerCards from "./components/player Cards/PlayerCards";

const playerDataPromise = fetch("/playerData.json").then((res) => res.json());

function App() {

  const [coin , setCoin] = useState('10000000')
  return (
    <>
      <header>
        <Navbar coin={coin}></Navbar>
        <Hero></Hero>
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PlayerCards promise={playerDataPromise} setCoin={setCoin} coin={coin}></PlayerCards>
        </Suspense>
      </main>
    </>
  );
}

export default App;
