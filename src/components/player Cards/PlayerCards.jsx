import { use, useState } from "react";
import AvailablePlayer from "../players/AvailablePlayer";
import SelectedPlayer from "../players/SelectedPlayer";
const PlayerCards = ({ promise , setCoin , coin}) => {
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
      {select === "available" ? (
        <AvailablePlayer playerData={playerData} setCoin={setCoin} coin={coin}></AvailablePlayer>
      ) : (
        <SelectedPlayer></SelectedPlayer>
      )}
    </div>
  );
};

export default PlayerCards;
