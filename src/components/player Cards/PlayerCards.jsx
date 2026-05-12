import { use } from 'react';
import Card from './Card';

const PlayerCards = ({promise}) => {
    const playerData = use(promise);
    console.log(playerData);
    return (
        <div className='grid grid-cols-4 w-9/12 mx-auto gap-5 justify-items-center mt-10'>
            {
                playerData.map(player => <Card key={player.id} player={player}></Card>)
            }
        </div>
    );
};

export default PlayerCards;
