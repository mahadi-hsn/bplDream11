import { useState } from "react";

const Card = ({ player, setCoin , coin}) => {
  const {
    name,
    battingStyle,
    bowlingStyle,
    country,
    image,
    price,
    rating,
    role,
  } = player;

  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    setIsSelected(true);
    setCoin(coin - price);
  };
  return (
    <div className="w-[260px] bg-white rounded-xl shadow-2xl overflow-hidden">
      <img
        className="w-full h-[220px] object-cover"
        src={image}
        alt="Virat Kohli"
      />

      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-user text-gray-700 text-lg"></i>

          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-flag"></i>
            {country}
          </p>

          <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs">
            {role}
          </span>
        </div>

        <hr className="mb-4" />

        <h3 className="font-semibold text-gray-800 mb-3">{rating}</h3>

        <div className="flex justify-between text-sm text-gray-600 mb-5">
          <p>{battingStyle}</p>
          <p>{bowlingStyle}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-sm text-gray-800">Price: ${price}</p>

          <button
            onClick={handleChoosePlayer}
            disabled={isSelected}
            className={`border border-gray-300 px-3 py-2 rounded-lg text-sm transition duration-300 ${
              isSelected
                ? "bg-black text-white cursor-not-allowed opacity-80"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
