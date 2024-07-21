import {createSlice} from "@reduxjs/toolkit"; 

const searchSlice = createSlice({
    name: "search", 
    initialState:{
        movieName: null, 
        searchMovie: null
    },

    reducers:{


        // setMovieName : (state , action)=>{
        //   state.movieName = action.payload
        // },

        // setSearchMovie : (state , action)=>{
        //     state.searchMovie = action.payload
        //   }



        setSearchMovieDetails:(state,action)=>{
            const {searchMovie, movies} = action.payload;
            state.movieName = searchMovie;
            state.searchMovie = movies;
        }
    }

});

export const {setSearchMovieDetails} = searchSlice.actions;
export default searchSlice.reducer;