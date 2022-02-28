import './App.css'
import React, { useState, useEffect } from 'react';
import axios from './instance';
import './row.css';

const baseURl="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){
    
    const [movie, setMovies]= useState([]);
    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results)
           return request
        } fetchData(); 
            
    },[fetchUrl])
    

   const onscroll=(e)=>{
      console.log(e.target.scrollLeft)
      if(e.target.scrollLeft > 6){
           e.target.parentNode.querySelector('.left').style.visibility='visible';
      }else if(e.target.scrollLeft - 250 < 6 ){
          e.target.parentNode.querySelector('.left').style.visibility='hidden';
      }else {
          if(e.target.scrollLeft+=250 == e.target.scrollLeft){
              
              e.target.parentNode.querySelector('.left').style.visibility='hidden';
          }
      }
   }

   
    
    return (
        <div className='container' >
            <h2>{title}</h2>
            <div className="row" onScroll={onscroll}>
                {movie.map(movie => (
                    <img 
                     key={movie.id}
                     className={`row-image ${isLargeRow && "row-image-large "}`}
                     src={`${baseURl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                     ))}
            </div>
            <div className='left' >{`<`}</div>
            <div className='right'>{`>`}</div>
        </div>
    )
}

export default Row;
