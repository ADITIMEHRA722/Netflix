import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieVideos: null,
    toggle: false,
    open: false,
    id: "",
  },

  reducers: {
    // actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    getPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },

    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    setToggle: (state) => {
      state.toggle = !state.toggle;
    },

    getMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },

    getId: (state, action) => {
        state.id = action.payload;
      },
  },
});

export const {
    getId,
  setOpen,
  getMovieVideos,
  setToggle,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
