import { use, useState } from "react";
import Card from "./Card";

const PlayerCards = ({ promise }) => {
  const playerData = use(promise);
  const [select, setSelect] = useState("available");

  return (
    <div className="w-9/12 mx-auto my-12">
      <div className="flex justify-between items-center">
        {select === "available" ? (
          <h1 className="font-bold text-4xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-4xl">Selected Players</h1>
        )}
        <div>
          <button
            onClick={() => setSelect("available")}
            className={`btn ${select === "available" ? "btn-primary" : "btn"} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelect("select")}
            className={`btn ${select === "available" ? "btn" : "btn-primary"} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 justify-items-center mt-10">
        {playerData.map((player) => (
          <Card key={player.id} player={player}></Card>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;
