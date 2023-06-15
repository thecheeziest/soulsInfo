import React from 'react';

const InfoCon1 = ( {item} ) => {
    const {id, name, engname, theme1, theme2, title1, title2, title3, title4} = item
    return (
        <div className="con">
            <h3>{name}</h3>
            <em>{engname}</em>
            <strong>활동 이력</strong>
            <ul>
                <li>
                    <strong>{theme1}</strong>
                    <p>{title1}</p>
                    <p>{title2}</p>
                </li>
                <li>
                    <strong>{theme2}</strong>
                    <p>{title3}</p>
                    <p>{title4}</p>
                </li>
            </ul>
        </div>
    );
};

export default InfoCon1;