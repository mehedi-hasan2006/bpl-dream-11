import { use } from "react";
import Player from "./Player";
import SelectedPlayers from "./SelectedPlayers";

function PlayersData({ playersDataPromise, setCoin, coin, active, selectedCarts, setSelectedCarts, setTotalPlayers }) {
  const playersData = use(playersDataPromise);

  setTotalPlayers(playersData.length);

  return (
    <div>
      {active === "available" ? (
        <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {playersData.map((player) => (
            <Player
              key={player.id}
              player={player}
              setCoin={setCoin}
              coin={coin}
              selectedCarts= {selectedCarts}
              setSelectedCarts = {setSelectedCarts}
              
            ></Player>
            
          ))}
          
        </div>
      ) : (
        <SelectedPlayers selectedCarts= {selectedCarts}></SelectedPlayers>
      )}
    </div>
  );
}

export default PlayersData;
