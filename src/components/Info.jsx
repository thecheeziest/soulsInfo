import React from 'react';
import InfoLeft from './InfoLeft';
import InfoRight from './InfoRight';

const Info = ( {pic, content, showCon, page, tab} ) => {
    return (
        <div className="info">
            <InfoLeft pic={pic} />
            <InfoRight content={content} showCon={showCon} page={page} tab={tab} />
        </div>
    );
};

export default Info;