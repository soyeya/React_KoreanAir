import React from 'react';
import './scss/_app.scss';
import Navi from './components/Navi';
import Notice from './components/Notice.tsx';
import TicketForm from './components/TicketForm';
import Maincomponent from './components/Maincomponent';
import Footer from './components/Footer.tsx';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';


const App:React.FC = () => {

return (

    <div className="App">
       
      <BrowserRouter>
      <Navi/>
      <TicketForm/>
      <Notice/>
       <Maincomponent/>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
