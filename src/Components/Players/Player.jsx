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
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="{name}"
          />
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
              <button className="btn"> {type} </button>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <div>
                <p className="font-semibold" >Rating:  </p>
                <p> {rating} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
