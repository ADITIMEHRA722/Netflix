// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { options, Search_Movie } from "../utils/constant";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchMovieDetails } from "../redux/searchSlice";
// import MovieList from "./MovieList";
// import { setLoading } from "../redux/userSlice";

// const SearhMovie = () => {
//   const [searchedMovie, setSearchedMovie] = useState("");
//   const dispatch = useDispatch();
//   const isloading = useSelector((store) => store.app.isloading);
//   const { movieName, searchMovie } = useSelector((store) => store.searchMovie);

//   const submitHandlete = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));
//     try {
//       const res = await axios.get(
//         `${Search_Movie}${searchedMovie}&include_adult=false&language=en-US&page=1`,
//         options
//       );
//       // console.log(res.data)
//       const movies = res?.data?.results;
//       dispatch(setSearchMovieDetails({ searchMovie, movies }));
//     } catch (error) {
//     } finally {
//       dispatch(setLoading(false));
//     }

//     setSearchedMovie("");
//   };

//   return (
//     <>
//       <div className="flex justify-center pt-[10%] w-full">
//         <form onSubmit={submitHandlete} action="" className="w-[50%]">
//           <div className="flex p-2 justify-between rounded w-[100%] shadow-md border-2 border-gray-200">
//             <input
//               value={searchedMovie}
//               onChange={(e) => {
//                 setSearchedMovie(e.target.value);
//               }}
//               className=" w-full outline-none rounded-md text-lg"
//               type="text"
//               placeholder="search movies"
//             />

//             <button className=" text-white rounded-md px-4 py-2 bg-red-800">
//               {isloading ? "Loding..." : "Search"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* movie name */}

//       {searchMovie !== null ? (
//         <MovieList title={movieName} searchMovie={true} movies={searchMovie} />
//       ) : (
//         <div className="flex items-center justify-center pt-40">
//           <h1>Movie Not found !</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default SearhMovie;


import React, { useState } from "react";
import axios from "axios";
import { options, Search_Movie } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import MovieList from "./MovieList";
import { setLoading } from "../redux/userSlice";

const SearhMovie = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const dispatch = useDispatch();
  const isloading = useSelector((store) => store.app.isloading);
  const { movieName, searchMovie } = useSelector((store) => store.searchMovie);

  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${Search_Movie}${searchedMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = res?.data?.results || [];
      dispatch(setSearchMovieDetails({ searchMovie: movies, movieName }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      dispatch(setLoading(false));
    }

    setSearchedMovie("");
  };

  return (
    <>
      <div className="flex justify-center pt-[10%] w-full">
        <form onSubmit={submitHandle} className="w-[50%]">
          <div className="flex p-2 justify-between rounded w-[100%] shadow-md border-2 border-gray-200">
            <input
              value={searchedMovie}
              onChange={(e) => setSearchedMovie(e.target.value)}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="search movies"
            />
            <button className="text-white rounded-md px-4 py-2 bg-red-800">
              {isloading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {/* Display movie list or message */}
      {searchMovie && searchMovie.length > 0 ? (
        <MovieList title={movieName} searchMovie={true} movies={searchMovie} />
      ) : (
        <div className="flex items-center justify-center pt-40">
          <h1>Movie Not found!</h1>
        </div>
      )}
    </>
  );
};

export default SearhMovie;

