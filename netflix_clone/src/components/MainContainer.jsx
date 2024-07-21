import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import VideoTitle from './VideoTitle'
import {useSelector} from "react-redux"

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return; // early return in react 
  
  const {overview , id , title} = movie[4];


  return (
    <div>
      <VideoTitle title ={title} overview = {overview}/>
      <BackgroundVideo  movieId={id}/>
  
    </div>
  )
}

export default MainContainer