import React , { useState , useEffect } from 'react';
import { BoardList } from '../ts/board';
import Img1 from '../Img/boardImg.png';



let BoardCont = {


    title : [

           "마일리지 몰 기획 SKYPASS Deal 『추석기획전』",
           "대한항공 사칭 피싱 이메일 주의",
           "한국 출발 국제선 유류할증료 (2023년 9월)",
           "캐시앤마일즈 서비스 이용 한도 확대",
    ],

    content : [

        "마일리지 몰 특별기획전, 추석에 소중한 마음을 선물해보세요",
        "대한항공 관련 사칭 피싱 이메일 주의사항",
        "2023년 9월기준 한국 출발 국제선 유류햘증료 안내",
        "캐시앤마일즈 서비스 이용 한도 30% 확대"
    ]

}


const Board = () => {

  const [ open , setOpen ] = useState(-1);
  const openMenu = (e) => {

    const list_array = e.target.parentElement.parentElement; 
    const list_array1 = [...e.target.parentElement.parentElement.children];
    const list_final = list_array1.indexOf(e.target.parentElement);
  
    setOpen(list_final);
    console.log(open);

  }

return(
    <section className="Boardwrap">
       <div className="boardList">
        <h1>알려드립니다.</h1>
        <ul>
            {BoardCont.title.map((v ,i) => (
            <li key={'board' + i}><p onClick={openMenu}>{v}</p>
            <div className={open == i ? "listCont active" : "listCont"}  key={'boardCont' + i}>
                <p>{BoardCont.content[i]}</p>
            </div>
            </li>
            ))}
          </ul>
       </div>
       <div className="boardImg">
         <ul><img src={Img1} alt="" /></ul>
       </div>
     </section>

     );
}

export default Board;