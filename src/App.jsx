import { Suspense } from "react";
import Navbar from "./Components/Navbar";
import PlayersData from "./Components/Players/PlayersData";
import Hero from "./Hero";
import Player from "./Player";

const playersDataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <Player></Player>



      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PlayersData playersDataPromise={playersDataPromise}></PlayersData>
      </Suspense>
    </>
  );
}

export default App;
