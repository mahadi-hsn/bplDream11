import { use, useState } from "react";
import AvailablePlayer from "../players/AvailablePlayer";
import SelectedPlayers from "../players/SelectedPlayers";



const PlayerCards = ({ promise, setCoin, coin }) => {


  const playerData = use(promise);
  const [select, setSelect] = useState("available");
  const [selectedPlayer , setSelectedPlayer] = useState([]);

  const handleSelectedPlayer = (player) =>{
    const newSelectedPlayer = [...selectedPlayer , player];
    setSelectedPlayer(newSelectedPlayer);
  }

  return (
    <div className="w-9/12 mx-auto my-12">


      <div className="flex justify-between items-center">
        {select === "available" ? (
          <h1 className="font-bold text-4xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-4xl">Selected Players ({selectedPlayer.length} / {playerData.length})</h1>
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
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>

        {/* {
          selectedPlayer.map(newPlayer => <li>{newPlayer.name}</li>)
        } */}

      {select === "available" ? (
        <AvailablePlayer
          playerData={playerData}
          setCoin={setCoin}
          coin={coin}
          handleSelectedPlayer={handleSelectedPlayer}
        ></AvailablePlayer>
      ) : (
        <SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin}></SelectedPlayers>
      )}

    </div>
  );
};

export default PlayerCards;
