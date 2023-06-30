import './style.css';
import BrandLogo from './brand_logo.png';
import flipkart from './flipkart.png';
import Amazon from './amazon.png';
import Shoe from './shoe_image.png'
function Nike(){
    return(
        <>
        <div className='container'>

            <nav>
                <div className='logo'>
                    <img src={BrandLogo} alt="BrandLogo" />
                </div>
                <div className='link'>
                    <ul>
                        <li>Home</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='logIn'>
                    <button>Login</button>
                </div>
            </nav>







            <div className='box'>
                <div className='content'>
                    <p>
                    YOUR FEET DESERVE THE BEST
                    </p>
                    <span>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </span>

                    <div className='btn'>
                        <button className='active'>Shop Now</button>
                        <button>category</button>
                    </div>
                    <div className='card'>
                    <span className='fn'>Also Available On</span>
                    <div className='img'> 
                 
                    <img src={flipkart} alt="flipkart" />
                    <img src={Amazon} alt="amazon" />
                    </div>
                    </div>
                </div>

                <div className='shoe'>
                    <img src={Shoe} alt="shoe" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Nike;