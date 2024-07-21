
import { options, Popular_Movies } from '../utils/constant';
import axios from "axios"
import { useDispatch } from "react-redux";
import {getPopularMovies} from "../redux/movieSlice";

const usePopularMovie = async () => {
    const dispatch = useDispatch();
  try{

    const res = await axios.get(Popular_Movies, options); 
    // console.log("popular res: ", res.data.results);
    dispatch(getPopularMovies(res.data.results))
  }catch(error){
    console.log(error)
  }


}

export default usePopularMovie