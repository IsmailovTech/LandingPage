import react from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Body from './components/body/Body';
import Increase from './components/increase/Increase';
import Simple from './components/simple/Simple';
import Invest from './components/invest/Invest';
import Help from './components/help/Help';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
     <Navbar />
     <Body />
     <Increase />
     <Simple />
     <Invest />
     <Help />
     <Footer />
    </div>
  );
}

export default App;
