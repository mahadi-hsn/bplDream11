const SelectedPlayer = ({ players, selectedPlayer, setSelectedPlayer, coin , setCoin}) => {
  const handleDelete = () => {
    const filteredPlayer = selectedPlayer.filter(
      (player) => player.name != players.name,
    );
    setSelectedPlayer(filteredPlayer)
    setCoin(coin + players.price)
  };
  return (
    <div className="border border-amber-500 my-5 p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 justify-between">
          <div>
            <img
              className="h-[100px] w-[100px] rounded-lg"
              src={players.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{players.name}</h1>
            <h4>{players.role}</h4>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleDelete();
            }}
            className="btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
