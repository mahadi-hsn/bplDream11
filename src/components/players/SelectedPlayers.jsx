import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}) => {
  return (
    <div>
      {selectedPlayer.map((player) => (
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
