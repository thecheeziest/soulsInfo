import React from 'react';
import InfoCon1 from './InfoCon1'
import InfoCon2 from './InfoCon2';
import InfoCon3 from './InfoCon3';
import InfoCon4 from './InfoCon4';

const InfoBox = ( {content, page} ) => {
    return (
        <div>
            {   
                page === 1 ? content.map(item => <InfoCon1 item={item} />) : page === 2 ? content.map(item => <InfoCon2 item={item} />)
                : page === 3 ? content.map(item => <InfoCon3 item={item} />) : page === 4 ? content.map(item => <InfoCon4 item={item} />) : ""
            }
        </div>
    );
};

export default InfoBox;