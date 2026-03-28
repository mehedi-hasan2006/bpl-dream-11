import { Trash2 } from "lucide-react";

export default function SelectedPlayers({ selectedCarts }) {
  return (
    <div className="container mx-auto space-y-3 px-3">
      {selectedCarts.map((cart) => (
        <div key={cart.id} className="flex justify-between items-center border rounded-2xl p-3 ">
          <div  className="flex gap-3 ">
            <img className="w-20 h-20 rounded-3xl object-cover " src={cart.img} alt="" />
            <div className="flex flex-col justify-center">
              <h2 className="font-bold text-[24px]"> {cart.name} </h2>
              <p className="text-gray-400"> {cart.battingStyle} </p>
            </div>
          </div>
          <div>
            <Trash2 className="cursor-pointer text-red-600"/>
          </div>
        </div>
      ))}
    </div>
  );
}
