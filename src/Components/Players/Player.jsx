import { CircleUser, Flag } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

function Player({ player, setCoin, coin, selectedCarts, setSelectedCarts }) {
  const {
    name,
    rating,
    country,
    price,
    battingStyle,
    bowlingStyle,
    img,
    type,
  } = player;


  const [isSelected, setIsSelected] = useState(false);

  const choosePlayer = () => {
    setIsSelected(true);

    

    if (coin > price) {
      setCoin(coin - price);
      toast.success(`${name} is added`);
    } else {
      toast.error("Insuficient Coins!");
      return
    }
    setSelectedCarts([...selectedCarts, player])
  };

  return (
    <div>
      <div className="card bg-base-100 dark:bg-gray-800 shadow-sm">
        <figure>
          <img className="w-75 h-42" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            <CircleUser></CircleUser> {name}{" "}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Flag size={20} /> {country}
            </div>
            <div>
              <button className="btn dark:bg-gray-700 "> {type} </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold">Rating: </p>
              <p className="text-right"> {rating} </p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Bating Style: </p>
              <p className="text-right"> {battingStyle} </p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Bowling Style: </p>
              <p className="text-right"> {bowlingStyle} </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <p className="font-semibold">Price: </p>
                <p className="text-right"> ${price} </p>
              </div>
              <div>
                <button
                  onClick={choosePlayer}
                  className="btn bg-transparent dark:bg-gray-600  " 
                  disabled={isSelected}
                >
                  {isSelected === true ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
