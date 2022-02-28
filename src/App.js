import React, {useEffect} from "react"
import Nar from './component/Nar';
import Banner from './component/Banner';
import Row from './component/row'
import './component/App.css'
import requests from "./component/request";


function App() {
 
  var rowList

  const starter=()=>{
    rowList = document.querySelectorAll('.container')  
    for (var i=0; i<rowList.length ; i++){

         rowList[i].addEventListener("mouseenter",(e)=>{
           console.log(e.target.scrollLeft)
             if(e.target.querySelector('.row').scrollLeft > 6){
                 e.target.querySelector('.left').style.visibility='visible'
             }
             e.target.querySelector('.right').style.visibility='visible'
             
          })
         rowList[i].addEventListener("mouseleave",(e)=>{
              e.target.querySelector('.left').style.visibility='hidden'
              e.target.querySelector('.right').style.visibility='hidden'   
          })
         rowList[i].querySelector('.right').addEventListener('click', e =>{
              e.target.parentNode.querySelector('.row').scrollLeft+=250
         })
         rowList[i].querySelector('.left').addEventListener('click', e =>{
              e.target.parentNode.querySelector('.row').scrollLeft-=250
         })
         
    }

  }
  useEffect(starter,[])
  
  
  

  return (
    <div className="App">
      <Nar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Trending now" fetchUrl={requests.fetchActionMovies}/>
    </div>
  );
}

export default App;