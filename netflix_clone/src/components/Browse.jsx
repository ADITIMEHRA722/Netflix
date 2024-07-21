import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearhMovie from "./SearhMovie";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
const toggle = useSelector(store => store.movie.toggle)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // my custom hook

  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearhMovie />
        ) : (
          <>
          
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
