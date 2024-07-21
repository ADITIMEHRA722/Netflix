import { useDispatch } from "react-redux";
import { options, Top_Rated_Movies } from "../utils/constant";
import { getTopRatedMovies } from "../redux/movieSlice";
import axios from "axios"

const useTopRatedMovies = async () => {
     const dispatch = useDispatch();
    try{

        const res = await axios.get(Top_Rated_Movies, options); 
        //console.log("top  rated res: ", res.data.results);
       dispatch(getTopRatedMovies(res.data.results))

    }catch(error){
        console.log(error);
    }

}

export default useTopRatedMovies