import React, { useEffect, useState } from 'react';
import {AiOutlinePlayCircle,AiFillPlusCircle} from 'react-icons/ai'
import '../style/home.scss';

import axios from 'axios';


const Home = () => {
 const [popularMovie,setPopularMovie] = useState([]);
 const [upcomingMovie,setUpcomingMovie] = useState([]);
 const [topRatedMovie,setTopRatedMovie] = useState([]);
 const [NowPlayingMovie,setNowPlayingdMovie] = useState([]);

 const apiKey = "?api_key=db9fc15e4392ee900f12fcb5246c12bf";

 const apiUrl = `https://api.themoviedb.org/3/movie`;

 const upcoming = 'upcoming';
 const topRated ="top_rated";
 const popular ='popular';
 const nowPlaying = 'now_playing';
 const imgUrl = "https://image.tmdb.org/t/p/original";


 useEffect(()=>{
   const  fetchUpcoming = async() =>{
        const {data}  = await axios.get(`${apiUrl}/${upcoming}${apiKey}`);
        setUpcomingMovie(data['results']);
    }
    const fetchPopular = async() =>{
        const {data} = await axios.get(`${apiUrl}/${popular}${apiKey}`);
        setPopularMovie(data['results']);

    }
    const fetchTopRated = async() =>{
        const {data} = await axios.get(`${apiUrl}/${topRated}${apiKey}`);
        setTopRatedMovie(data['results']);
    }
    const fetchNowPlaying = async() =>{
        const {data} = await axios.get(`${apiUrl}/${nowPlaying}${apiKey}`);
        setNowPlayingdMovie(data['results']);
    }


    fetchTopRated();
    fetchNowPlaying();
    fetchPopular();
    fetchUpcoming();
 },[])

 const date =new Date();
 const Row = ({arr=[]}) =>{
    return(
    arr.map((item,index)=>(
        <div key={index}>
            <img src={`${imgUrl}/${item.backdrop_path}`} alt="asdlksad"  className='img'/>
            <p>{item.overview}
            </p>
        </div>
    ))
    )
 }

  return (
    <div className='home'>
        <div className="latest"
         style={{
            backgroundImage: popularMovie[0]
                ? `url(${`${imgUrl}/${popularMovie[0].poster_path}`})`
                : "rgb(16, 16, 16)",
        }} 
        >
        {popularMovie[0] && <h1>{popularMovie[0].original_title}</h1>}
        {popularMovie[0] && <p>{popularMovie[0].overview}</p>}
            <div className="btn">
                <button className='active'> <AiOutlinePlayCircle/>PLay</button>
                <button> <AiFillPlusCircle/>Playlist</button>
            </div>
        </div>
        <div className="popular">
            <h2>Popular on Netflix</h2>
            <div className="movies">
            <Row arr={popularMovie} />
            </div>
        </div>

        <div className="popular">
            <h2>Upcoming Movies</h2>
            <div className="movies">
            <Row arr={upcomingMovie} />
            </div>
        </div>


        <div className="popular">
            <h2>Toprated Movies</h2>
            <div className="movies">
            <Row arr={topRatedMovie} />
            </div>
        </div>


        <div className="popular">
            <h2>Now Playing Movies</h2>
            <div className="movies">
            <Row arr={NowPlayingMovie} />
            </div>
        </div>

        <div className="category">
            <div className="movies">
                <div>Action</div>
                <div>Adventure</div>
                <div>Comedy</div>
                <div>Anime</div>
                <div>Crime</div>
                <div>Drama</div>
                <div>Story</div>
            </div>
        </div>
    </div>
  )
}
export default Home