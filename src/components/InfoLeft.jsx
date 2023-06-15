import React from 'react';
import ShowImg from './ShowImg';

const InfoLeft = ( {pic} ) => {
    return (
        <div className="left">
            {
                pic.map(item => <ShowImg item={item} key={item.id} />)
            }
        </div>
    );
};

export default InfoLeft;