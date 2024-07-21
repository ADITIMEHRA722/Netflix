import { useDispatch } from "react-redux";
import { options, Top_Rated_Movies } from "../utils/constant";
import { getUpcomingMovies } from "../redux/movieSlice";
import axios from "axios"

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try{

        const res = await axios.get(Top_Rated_Movies, options);
      //  console.log("upcomings res: ", res.data.results); 
       dispatch(getUpcomingMovies(res.data.results))

    }catch(error){
        console.log(error);
    }
}

export default useUpcomingMovies