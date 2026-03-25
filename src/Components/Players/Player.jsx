import { CircleUser, Flag } from "lucide-react";
import React from "react";

function Player({ player }) {
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

  return (
    <div>
      <div className="card bg-base-100 dark:bg-gray-800 shadow-sm">
        <figure>
          <img className="w-[300px] h-[168px]" src={img} alt={name} />
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
                <button className="btn bg-transparent dark:bg-gray-600">
                  Choose Player
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
