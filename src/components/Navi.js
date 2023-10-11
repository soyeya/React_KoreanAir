import React , { useState , useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../Img/icon1.svg';
import Icon2 from '../Img/icon2.svg';
import Icon3 from '../Img/icon4.svg';
import koreanLogo from '../Img/koreanAir_logo.png';
import NaviDB from '../json/Navi.json';
import MenuDB from '../json/Menu.json';



const Navi = () => {


    let icon_array = [ [Icon1 , "이벤트" ], [Icon2 , "자주 묻는 질문"]]

    const [ openLogin , setOpenlogin ] = useState(true);
    const [ menu , setMenu ] = useState(0);
    const [ change1 , setChange1 ] = useState(true);
    const [ change2 , setChange2 ] = useState(true);
    const [ change3 , setChange3 ] = useState(true);
    const [ change4 , setChange4 ] = useState(true);

    const targetChange = useRef(null);

    const clickLogin = () => { setOpenlogin(false);}
    const closeLogin = () => { setOpenlogin(true);}

    function change_chx(){ targetChange.current.placeholder = "스카이 패스번호";}
    function return_chx(){ targetChange.current.placeholder = "아이디";}
 

    const openModal = (e) =>{

        const menu_list = e.target.parentElement.parentElement
        const menu_arry = [...e.target.parentElement.parentElement.children];
        const menu_open = menu_arry.indexOf(e.target.parentElement);
        setMenu(menu_open);
        console.log(menu);


        if(menu_open == 0) {

            setChange1(false);

        }
        else if(menu_open == 1){

            setChange2(false);

        }
        else if(menu_open == 2){

            setChange3(false);
 
        }
        else if(menu_open == 3){

            setChange4(false);
      
        } else{

         setChange1(true);
         setChange2(true);
         setChange3(true);
         setChange4(true);

        }
    }

    const closeModal = () => {

        setChange1(true);
        setChange2(true);
        setChange3(true);
        setChange4(true);

    }

    
  return(
 <>
     <header>
        <div className="top">
                <ul>
                    {icon_array.map((v,i) => (
                     <li key={'icon' + i}><a href=""><img src ={v[0]}/>{v[1]}</a></li>
                    ))}
                    <li>
                        <select name="contry" id="language">
                            {NaviDB.select.option.map((v,i) => (
                          <option value={v} key={'option' + i}>{v}</option>
                            ))}
                        </select></li>
                    </ul>
        </div>
        <nav>
            <div className="koreanAir_logo"><Link to ="/"><img src={koreanLogo}/></Link></div>
            <div className="korean_menu_wrap">
               <ul>
                {NaviDB.nav.title.map((v,i) => (
                     <li key={'nav_menu' + i} onMouseOver={openModal} onMouseOut={closeModal}><p><em></em>{v}</p></li>
                     ))} 
                </ul></div>
            <div className="menu_atc">
                <ul><li onClick={clickLogin}>로그인</li></ul>
                <ul><img src={Icon3} alt="search" /></ul>
            </div>
        </nav>
     </header>
     <div className={openLogin ? "Login_page" : "Login_page on"}>
           <div className="login">
              <p className='login_txt'>로그인</p>
              <div className="login_op">
                <input type="radio" name="login" id="loginID_1" onClick={return_chx} defaultChecked/><label for='loginID_1'>아이디</label>
                <input type="radio" name="login" id="loginID_2" onClick={change_chx} /><label for='loginID_2'>스카이패스번호</label>
              </div>
              <ul className='login_box'>
                <li><input type="text" placeholder='아이디' ref={targetChange}/><button>Submit</button></li>
                <li><input type="text" placeholder='비밀번호'/><button>Submit</button></li>
              </ul>
              <ul className='login_second'>
                <p><em></em>다른 계정으로 로그인<em></em></p>
                <li>
                {NaviDB.login_second1.map((v,i) => (
                  <a href={v.href} target='_blank' key={'second_login1' + i}>{v.title}</a> ))}</li>
                <li>
                {NaviDB.login_second2.map((v,i) => (
                     <a href={v.href} target='_blank' key={'second_login2' + i}>{v.title}</a> ))}</li>
              </ul>
               <span onClick={closeLogin}>×</span>
           </div>
           </div>
   
        <div className="nav_list">
            <div className={change1 ? "menu" : "menu active"}>
                   <ul>
                   {MenuDB.menu1.list1.map((v,i) => (
                      <li key={'menu_1_1' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu1.list2.map((v,i) => (
                      <li key={'menu_1_2' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu1.list3.map((v,i) => (
                      <li key={'menu_1_3' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu1.list4.map((v,i) => (
                      <li key={'menu_1_4' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
           </div>
            <div className={change2 ? "menu" : "menu active"}>
                   <ul>
                   {MenuDB.menu2.list1.map((v,i) => (
                      <li key={'menu_2_1' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu2.list2.map((v,i) => (
                      <li key={'menu_2_2' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu2.list3.map((v,i) => (
                      <li key={'menu_2_3' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu2.list4.map((v,i) => (
                      <li key={'menu_2_4' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
           </div>
            <div className={change3 ? "menu" : "menu active"}>
                   <ul>
                   {MenuDB.menu3.list1.map((v,i) => (
                      <li key={'menu_3_1' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu3.list2.map((v,i) => (
                      <li key={'menu_3_2' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu3.list3.map((v,i) => (
                      <li key={'menu_3_3' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu3.list4.map((v,i) => (
                      <li key={'menu_3_4' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
           </div>
            <div className={change4 ? "menu" : "menu active"}>
                   <ul>
                   {MenuDB.menu4.list1.map((v,i) => (
                      <li key={'menu_4_1' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu4.list2.map((v,i) => (
                      <li key={'menu_4_2' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu4.list3.map((v,i) => (
                      <li key={'menu_4_3' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
                   <ul>
                   {MenuDB.menu4.list4.map((v,i) => (
                      <li key={'menu_4_4' + i}><a href={v.href}>{v.content}</a></li>
                      ))}
                   </ul>
           </div>
        </div>
     </>
  )

}
export default Navi;
