import { useState } from "react";

const Player = () => {
  const [active, setActive] = useState("available");

  return (
    <div className="mt-5 flex gap-3 justify-between items-center mb-10 px-3">
      {active === "available" && <p className="font-bold text-[28px]">Available Players</p>}
      {active === "selected" && <p className="font-bold text-[28px]">Selected Players</p>}
      <div className="flex-col  md:flex-row">
        <button
          onClick={() => setActive("available")}
          className={`btn w-30 mt-2 mr-3 ${active === "available" ? "bg-amber-200 font-semibold" : "bg-gray-200"}`}
        >
          Available
        </button>
        <button
          onClick={() => setActive("selected")}
          className={`btn  mt-2 ${active === "selected" ? "bg-amber-200 font-semibold" : "bg-gray-200"}`}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Player;