export const API_END_POINT ="http://localhost:8080/api/v1/user"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmZhYjU1Y2FlOGU4YmRmMTM0MGZiNjZkNjE3ZWNjYSIsIm5iZiI6MTcyMDg3OTU3Ny4wMzk4ODYsInN1YiI6IjY2OTI3MTVlYTcxZDdkYzI4OGUyN2RlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ToWP7yqOLYVbJOLmO1JpBrLdkcRhmhfAok4M_tnMwBA'
    }
  };

  export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";

  export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

  export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";

  export const Upcoming_movies = "https://api.themoviedb.org/3/movie/upcoming";

  export const Banner_Url = "https://image.tmdb.org/t/p/w500";

export const Search_Movie = "https://api.themoviedb.org/3/search/movie?query="