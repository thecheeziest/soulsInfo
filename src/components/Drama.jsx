import './Drama.scss'
import { useState } from 'react';
import dataList from '../assets/api/characterList'
import picList from '../assets/api/characterPic'
import contents from '../assets/api/contents';
import tabList from '../assets/api/tabList';
import CharList from './CharList'
import Info from './Info';

const Drama = () => {
    const [ data, setData ] = useState(dataList);
    const [ pic, setPic ] = useState(picList);
    const [ content, setContent ] = useState(contents);
    const [ tab, setTab ] = useState(tabList);

    const [ page, setPage ] = useState(1);
    const [ isShow, setIsShow ] = useState(false);

    const showPic = id => {
        setData(data.map(item => item.id === id ? {...item, show: true} : {...item, show: false}));
        // 누르면 눌린 애만 show 값 true, 나머지 false

        setIsShow(data.map(item => item.show ? !isShow : isShow));
        // show 속성인 data만 true 상태 = 노출

        setPic(picList.filter(item => item.id === id));
        setContent(contents.filter(item => item.id === id));
        // id에 맞는 item 반환

        setPage(1);
        // 배우 클릭해서 show 될 때마다 매번 첫 콘텐츠는 1로 고정

        setTab(tab.map(item => item.id === 1 ? {...item, on: true} : { ...item, on: false }))
        // tab 스타일도 1번 고정
    }

    const showCon = id => {
        setPage(id)
        // 누를 때마다 콘텐츠 페이지 변경

        setTab(tab.map(item => item.id === id ? { ...item, on: true } : { ...item, on: false }));
        // id와 일치하는 콘텐츠 스타일
    };

    return (
        <div className="wrap">
            <div className="content">
                <div className="inner">
                    <h1>환혼: 빛과 그림자</h1>
                    <CharList data={data} showPic={showPic} />
                    {
                        // true일 때 목록 실행 (아무 인물 눌러야 true)
                        isShow && <Info pic={pic} key={data.id} content={content} showCon={showCon} page={page} tab={tab} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Drama;