import React from 'react';

const InfoCon4 = ( {item} ) => {
    const { link1, head1, cList1, linkM1, link2, head2, cList2, linkM2, link3, head3, cList3, linkM3 } = item
    return (
        <div className="con con4">
            <a href={link1} target="_blank">{head1}</a>
            <p>{cList1}</p>
            <em>{linkM1}</em>
            <a href={link2} target="_blank">{head2}</a>
            <p>{cList2}</p>
            <em>{linkM2}</em>
            <a href={link3} target="_blank">{head3}</a>
            <p>{cList3}</p>
            <em>{linkM3}</em>
        </div>
    );
};

export default InfoCon4;