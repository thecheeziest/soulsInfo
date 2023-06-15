import React, { useState } from 'react';

const ShowImg = ( {item} ) => {
    const {name, pic1, pic2, pic3} = item
    const [bigimg, setBigImg] = useState(pic1)
    const changePic = thum => {
        setBigImg(thum)
    }

    return (
        <div className="pic-box">
            <div className="big-img">
                <img src={bigimg} alt="" />
            </div>
            <div className="thum">
                    <img src={pic1} alt={name} onClick={() => changePic(pic1)} />
                    <img src={pic2} alt={name} onClick={() => changePic(pic2)} />
                    <img src={pic3} alt={name} onClick={() => changePic(pic3)} />
            </div>
        </div>
    );
};

export default ShowImg;