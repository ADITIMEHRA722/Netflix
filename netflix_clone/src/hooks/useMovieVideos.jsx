import React, { useEffect } from "react";
import { options } from "../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMovieVideos } from "../redux/movieSlice";

const useMovieVideos = async (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
      
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "trailer";
        });
          console.log("tailer",res)

        dispatch(
          getMovieVideos(trailer.lengh > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, []);
};

export default useMovieVideos;
