import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}) => {
  return (
    <div>
      {selectedPlayer.length === 0 ?
    <div className="flex justify-center items-center mt-30 w-8/12 mx-auto rounded-xl p-16 bg-slate-200">
        <h1>No Player Selected</h1>
      </div>
      :selectedPlayer.map((player) => (
        <SelectedPlayer
          key={player.id}
          selectedPlayer={selectedPlayer}
          players={player}
          setSelectedPlayer={setSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
