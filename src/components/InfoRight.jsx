import React from 'react';
import InfoConBox from './InfoConBox';

const InfoRight = ( {content, showCon, page, tab} ) => {
    return (
        <div className="right">
            <ul>
                {
                    tab.map(item => <li className={item.on ? "on" : ""} onClick={() => showCon(item.id)}>{item.tab}</li>)
                }
            </ul>
            <InfoConBox content={content} page={page} />
        </div>
    );
};

export default InfoRight;