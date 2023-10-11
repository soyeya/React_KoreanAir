import React from 'react';
import FooterDB from '../json/Footer.json';

const Footer:React.FC = () => {


     return(

        <>
        <section className="footerWrap">
            <div className="footerList1">
            {FooterDB.footer.map((v,i) => (
            <ul key={'footerList' + i}>
                <p>{v.title}</p>
                <li><a href={v.href[0]}>{v.subTitle[0]}</a></li>
                <li><a href={v.href[1]}>{v.subTitle[1]}</a></li>
                <li><a href={v.href[2]}>{v.subTitle[2]}</a></li>
                <li><a href={v.href[3]}>{v.subTitle[3]}</a></li>
                <li><a href={v.href[4]}>{v.subTitle[4]}</a></li>
                <li><a href={v.href[5]}>{v.subTitle[5]}</a></li>
            </ul>
            ))}
            </div>

            <div className="footerList2">
             <ul className='sns'>
                <li>
                    {FooterDB.snsLink.map((v,i) => (
                      <a href={v} key={'footermenu' + i}></a>
                    ))}
                </li>
             </ul>
             <ul className='appStore'>
                <li>
                  {FooterDB.appLink.map((v,i)=>(
                      <a href={v} key={'appLink' + i}></a>
                    ))}
                </li>
             </ul>
            </div>
        </section>
        </>
     )
}

export default Footer;