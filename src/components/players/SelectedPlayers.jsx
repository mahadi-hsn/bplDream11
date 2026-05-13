import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({selectedPlayer}) => {
    return (
        <div>
            {selectedPlayer.map(player => <SelectedPlayer player={player}></SelectedPlayer>)}
        </div>
    );
};

export default SelectedPlayers;