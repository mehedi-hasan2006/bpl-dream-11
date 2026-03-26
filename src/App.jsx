import { Suspense, useState } from "react";
import Navbar from "./Components/Navbar";
import PlayersData from "./Components/Players/PlayersData";
import Hero from "./Hero";
import Player from "./Player";
import { ToastContainer } from "react-toastify";

const playersDataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      {/* <Hero></Hero> */}
      <Player></Player>

      <Suspense fallback={<p className=" loading loading-dots loading-xl"></p>}>
        <PlayersData
          playersDataPromise={playersDataPromise}
          setCoin={setCoin}
          coin={coin}
        ></PlayersData>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
