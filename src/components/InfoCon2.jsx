import React from 'react';

const InfoCon2 = ( {item} ) => {
    const {name, cName, cInfo} = item
    return (
        <div className="con">
            <h3>{cName}</h3>
            <em>{name}</em>
            <strong>캐릭터 소개</strong>
            <p>{cInfo}</p>
        </div>
    );
};

export default InfoCon2;