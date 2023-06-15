import React from 'react';

const CharItem = ( {item, showPic} ) => {
    const {id, name, imgurl, show} = item
    return (
        <li data-id={id}>
            <div className="pic" onClick={() => showPic(id)}>
                <img src={imgurl} alt={name} />
            </div>
            <p>{name}</p>
        </li>
    );
};

export default CharItem;