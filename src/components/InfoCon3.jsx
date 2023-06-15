import React from 'react';

const InfoCon3 = ( {item} ) => {
    const {cName, ment1, mentby1, ment2, mentby2} = item
    return (
        <div className="con">
            <em>{cName} 役</em>
            <strong>{ment1}</strong>
            <p>{mentby1}</p>
            <em></em>
            <strong>{ment2}</strong>
            <p>{mentby2}</p>
        </div> 
    );
};

export default InfoCon3;