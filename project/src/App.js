import './App.css';
import About from './Components/About/About';
import { AiFillRocket } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <About />
      <div className="rocket object">
        <AiFillRocket color={'white'} size={40} />
      </div>
      {/* <div className="">
        <AiFillCloud color={'white'} size={40} />
      </div> */}
    </div>
  );
}

export default App;
