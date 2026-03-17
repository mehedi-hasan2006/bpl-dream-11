import { useState } from "react";

const Player = () => {
  const [active, setActive] = useState("available");

  return (
    <div className="mt-5 flex justify-between mb-10">
      {active === "available" && <p className="font-bold text-[28px]">Available Players</p>}
      {active === "selected" && <p className="font-bold text-[28px]">Selected Players</p>}
      <div>
        <button
          onClick={() => setActive("available")}
          className={`btn mr-3 ${active === "available" ? "bg-amber-200 font-semibold" : "bg-gray-200"}`}
        >
          Available
        </button>
        <button
          onClick={() => setActive("selected")}
          className={`btn ${active === "selected" ? "bg-amber-200 font-semibold" : "bg-gray-200"}`}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Player;