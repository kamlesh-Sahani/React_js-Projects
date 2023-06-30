import PlayGAme from "./components/DiceGame/PlayGame";
import Start from "./components/DiceGame/start";
import ButtonToggle from "./Button";
import { useState } from "react";
function App() {

  const [isStarted,setIsStarted] = useState(false);

  const StartHandler = () =>{
    setIsStarted((pre)=>!pre);
    console.log(isStarted);
  }
  return (
    <>
    {
      isStarted ? <Start/> : <PlayGAme toggle={StartHandler}/>

    }
    </>
  );
}

export default App;
