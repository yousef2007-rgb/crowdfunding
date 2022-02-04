import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Mastercraft from './Components/Mastercraft';
import Information from './Components/Information';
import About from './Components/About';
import { Variants,motion } from 'framer-motion';
function App() {
  return (
    <div className="App">
    <Information/>
    <About/>
    <Mastercraft/>
    <Header/>
    </div>
  );
}

export default App;
