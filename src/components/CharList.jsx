import React from 'react';
import CharItem from './CharItem';

const CharList = ( {data, showPic} ) => {
    return (
        <ul>
        {
            data.map(item => <CharItem key={item.id} item={item} showPic={showPic} />)
        }
        </ul>
    );
};

export default CharList;