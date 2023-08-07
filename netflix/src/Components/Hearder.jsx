import React from 'react';
import netflix from '../img/netflix.jpg'
import {BiSearch} from "react-icons/bi";
import '../style/header.scss';
import { Link } from 'react-router-dom';
const Hearder = () => {
  return (
    <div className='nav'>
      <div className="link">
        <img src={netflix} alt="" />
        <Link to={"/tvshow"}>Tv show</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/recentyadded"}>Recently Added</Link>
        <Link to={"/mylist"}>My List</Link>
      </div>
      <BiSearch className='search'/>
    </div>
  )
}
export default Hearder