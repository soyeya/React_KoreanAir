import React from 'react';
import BannerDB from '../json/Banner.json';
import bannerIcon1 from '../Img/travel_icon1.png';
import bannerIcon2 from '../Img/travel_icon2.png';
import bannerIcon3 from '../Img/travel_icon3.png';
import bannerIcon4 from '../Img/travel_icon4.png';
import bannerIcon5 from '../Img/travel_icon5.png';
import bannerIcon6 from '../Img/travel_icon6.png';

const Banner = () => {

    const ImgList = [ bannerIcon1, bannerIcon2,  bannerIcon3,  bannerIcon4,  bannerIcon5,  bannerIcon6]

    return(

        <>
        <section className="bannerWrap">
            <h2>여행의 완성을 위한 경험</h2>
            <div className="bannerList">
            {BannerDB.bannerBox.map((v,i) => (
                <ul key={'bannerList' + i}>
                    <li><p>{v.title}</p>
                    <img src={ImgList[i]} alt={'bannerImg' + i} />
                    </li>
                    <li className='displayNone'>
                        <a href={v.href[0]}>{v.subTitle[0]}</a>
                        <a href={v.href[1]}>{v.subTitle[1]}</a>
                        <a href={v.href[2]}>{v.subTitle[2]}</a></li>
                </ul>
                ))}
            </div>
        </section>
        </> 
    )

}

export default Banner;
