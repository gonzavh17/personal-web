import { useEffect, useState , useRef} from "react";
import "./App.css";
import  LoadingScreen  from "./Components/LoadingScreen";
import LandPage from "./Components/LandPage";
import {ParallaxText} from './AnimationComponents/ParallaxText'
import NavBar from "./Components/NavBar";
import { Home } from "./Components/Home";
import Cursor from "./Components/Cursor";
import Skills from "./Components/Skills";
function App() {

  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])

 

  return <div className="App">
    {/* <ParallaxText/> */}
    
    {/* <LoadingScreen/> */}
  
    {/* <LandPage/> */}

  {/* <Skills/> */}

    {
      loading ? <LoadingScreen/>
      :
      <LandPage/>
    }
    

   
  </div>;
}

export default App;
