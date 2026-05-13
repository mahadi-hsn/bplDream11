import Card from '../player Cards/Card';

const AvailablePlayer = ({playerData , setCoin , coin}) => {
    return (
        <div className="grid grid-cols-4 gap-5 justify-items-center mt-10">
            {playerData.map((player) => (
          <Card key={player.id} player={player} setCoin={setCoin} coin={coin}></Card>
        ))}
        </div>
    );
};

export default AvailablePlayer;