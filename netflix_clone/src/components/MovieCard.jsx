import React from 'react'
import { Banner_Url } from '../utils/constant';
import {useDispatch} from 'react-redux'
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({posterPath , movieId}) => {

  const dispatch = useDispatch()

  const handleOpen= ()=>{
  dispatch(getId(movieId))
  dispatch(setOpen(true));

  }

  if(posterPath===null) return null;
  return (
    <div className='w-48  pr-2' onClick={handleOpen}>
     <img 
      src={`${Banner_Url}/${posterPath}`} alt="img_banner" />   
    </div>
  )
}

export default MovieCard