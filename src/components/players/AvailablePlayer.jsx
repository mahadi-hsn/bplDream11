import Card from '../player Cards/Card';

const AvailablePlayer = ({
  playerData,
  setCoin,
  coin,
  handleSelectedPlayer,
  selectedPlayer,
}) => {
    return (
        <div className="grid grid-cols-4 gap-5 justify-items-center mt-10">
            {playerData.map((player) => (
          <Card
            key={player.id}
            player={player}
            setCoin={setCoin}
            coin={coin}
            handleSelectedPlayer={handleSelectedPlayer}
            isSelected={selectedPlayer.some((selected) => selected.id === player.id)}
          ></Card>
        ))}
        </div>
    );
};

export default AvailablePlayer;
