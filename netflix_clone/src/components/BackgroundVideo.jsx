import React from "react";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";

const BackgroundVideo = ({movieId, bool}) => {
  const trailer = useSelector(store=>store.movie.movieVideos)
  console.log(trailer)
 useMovieVideos(movieId);

  return (

    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-full":" w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=YEQKRHJjrnNLJlIn&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
