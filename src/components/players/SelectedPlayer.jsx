import { Trash, Trash2 } from "lucide";

const SelectedPlayer = ({ player }) => {
  console.log(player);
  return (
    <div className="border border-amber-500 my-5 p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 justify-between">
          <div>
            <img
              className="h-[100px] w-[100px] rounded-lg"
              src={player.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{player.name}</h1>
            <h4>{player.role}</h4>
          </div>
        </div>
        <div>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
