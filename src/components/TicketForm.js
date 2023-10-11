import React , {useState ,  useEffect} from 'react';
import Icon1 from '../Img/icon4.svg';
import axios from 'axios';


const TicketForm = () => {

    const [ result , setResult ] = useState(true);
    const [ data , setData ] = useState();
    const [ city , setCity ] = useState();
    
    const setCountry = (e) => {
        
        setCity(e.target.value);
        console.log(e.target.value);
        
    }
    
    
    const API_key = `443861433c15519eef1a71bc008f6d45`;
    const URL = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&searh&appid=${API_key}&lang=kr`);
   
    const WeatherAPI = () => {
                    
         axios.get(URL , {

            method : "get",
            headers : {

                "Content-Type" : "application/json; charset=utf-8"
            },

            body : JSON.stringify(data),
            timeout : 4000
        })

        .then((response) => (response.stringify(data)))
        .then((response) => {console.log(response.data)
        
         setData(response.data); 

 })

     .catch((error) => { console.log(error);});

  
    }

      const openWeather = (e) => {
        
        const target1 = e.target.parentElement.previousSibling;
        const target_value = target1.value;
        console.log(target_value);

        console.log("오늘의 날씨");

        if(target_value == ""){

            alert('검색어를 입력해주세요');
            setResult(true);


        } else{

            setResult(false);
            WeatherAPI();

                

        }

    }

    const closeWeather = () => { setResult(true); }

    const keyWeahter = (e) => {

        const txt_value = e.target.value;

        if(e.keyCode == 13){

            console.log('keycode_enter');
            e.target.value = "";
            setResult(false);
            WeatherAPI();

            if(txt_value == ""){

                alert('검색어를 입력해주세요');
                setResult(true);

            }
    
    }

}

useEffect ( () => {

    window.addEventListener( "load" , () => {

        WeatherAPI();
    })

  },[])

    return(

        <>
        <section className="ticket_wrap">
            <div className="weatherBox">
              <ul>
                <li> <p>Today's Weather</p></li>
                <li><input type="search" placeholder="Put the city names" onChange={setCountry} onKeyDown={keyWeahter}/><button onClick={openWeather}><img src={Icon1}/>{result}</button></li>
                </ul>
            </div>
        </section>
        <div className={ result ? "result_box" : "result_box open"} onClick={closeWeather}>
             <ul>
                <li><p><strong>NAME :</strong>{JSON.stringify(data)}</p></li>
                {/* <li><p><strong>TEMPERATURE :</strong>{Math.round(JSON.stringify(data.main.temp))}°C</p></li>
                <li><p><strong>WIND :</strong> {Math.round(JSON.stringify(data.wind.speed))} Km/h</p></li>
                <li><p><strong>HUMIDITY :</strong>{Math.round(JSON.stringify(data.main.humidity))} %</p></li> */}
             </ul>
            </div>
         
        </>
    )

}

export default TicketForm;