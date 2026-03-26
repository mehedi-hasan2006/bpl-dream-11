import { use } from "react";
import Player from "./Player";

function PlayersData({ playersDataPromise, setCoin, coin }) {
  const playersData = use(playersDataPromise);

  return (
    <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <Player key={player.id} player={player} setCoin={setCoin} coin ={coin} ></Player>
      ))}
    </div>
  );
}

export default PlayersData;
