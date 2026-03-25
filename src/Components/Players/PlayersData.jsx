import { use } from "react";
import Player from "./Player";

function PlayersData({ playersDataPromise }) {
  const playersData = use(playersDataPromise);
  console.log(playersData);

  return (
    <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {playersData.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
}

export default PlayersData;
