import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NoticeDB from '../json/Notice.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Notice:React.FC = () => {


     return(

        <>
        <section className="noticeWrap">
        <Swiper

        slidesPerView={1}
        spaceBetween={10}
        navigation = {true}
        breakpoints={{

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

        }}
        modules={[Navigation]}
        className="mySwiper noticeSwiper"
      >
        {NoticeDB.notice.map((v,i) => (
        <SwiperSlide className={'slides' + ' slide'+[i+1]} key={'noticeSwiper' + i}>
            <a href={v.href}><span>{v.txt}</span></a></SwiperSlide>
        ))} </Swiper>
        </section>
        </>
     )

}
export default Notice;