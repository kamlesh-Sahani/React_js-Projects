import React from 'react';
import "../style/home.scss";
import Box2img from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillInstagram,AiFillYoutube,AiFillAmazonCircle} from 'react-icons/ai'
const Home = () => {
  return (
   <>
   <div className="container" id='home'>
    <div className="box">
      <h1>Codinghar</h1>
      <p>solution to all your problems</p>
    </div>


    <div className="box2">
      <img src={Box2img} alt="web image" className='.movi'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet 
        tenetur rerum eius magni veniam magnam laudantium qui,
         repudiandae doloribus.</p>
    </div>

   </div>
   <div className="intro" id='about'>
      <h1>Introduction</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla odio, quis consectetur id consequuntur minima, accusamus officiis aut, animi sed commodi. Reiciendis ea consequuntur repudiandae autem facere, facilis eius, explicabo, harum quis odit qui temporibus nam sunt minus. Itaque consequatur ab quam officiis adipisci quibusdam amet iste. Fugit nihil tenetur, iure modi id voluptas commodi ex officia corrupti temporibus similique ipsa hic omnis inventore? Rerum ipsam culpa, delectus nulla, excepturi impedit nesciunt in consequatur veritatis debitis laudantium. Nulla reprehenderit omnis eum maiores est natus mollitia inventore, velit sapiente earum provident fuga officiis soluta cum, veniam pariatur dignissimos, illum ut
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis harum hic neque consequatur vel? Fuga accusamus neque soluta, accusantium dolores in vel deleniti perspiciatis dolorum nihil ab aperiam officiis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat recusandae quidem, ut facere at repudiandae rerum modi! Laborum placeat iste facere velit. Maiores odio non quasi perspiciatis cum et similique saepe! Ad culpa officia modi accusamus quasi placeat eius iure soluta maiores cum sunt, voluptatibus beatae magnam. Iusto, beatae facilis..</p>
    </div>
    <div className="brand" id='brand'>
      <h1>
  brands
      </h1>
      <div className="link">
        <div>
       <AiFillGoogleCircle/>
        <p>Google</p>
        </div>
        <div>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
        <div>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default Home;