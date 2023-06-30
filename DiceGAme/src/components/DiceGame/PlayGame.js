import './PlayGame.css';
import Icon from './dices1.png';

const PlayGAme =  (props) =>{
    return(
        <>
        <div className="container">
            <div className="img">
                <img src={Icon} alt="diceIcon" />
            </div>
            <div className="content" >
                <h1>DICE GAME</h1>
                <button onClick={props.toggle}>Play Now</button>
            </div>
        </div>
        </>
    );
}
export default PlayGAme;