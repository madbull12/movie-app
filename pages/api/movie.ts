export const API_ENDPOINT = "https://api.themoviedb.org/3/"
const API_KEY= process.env.NEXT_APP_API_KEY

export const getTrendingMovies = async() => {
    const res = await fetch(`${API_ENDPOINT}trending/movie/week?api_key=${API_KEY}`);
    const data= await res.json();


    return data.results;
}
export const getTrendingTvShows = async() => {
    const res = await fetch(`${API_ENDPOINT}tv/airing_today?api_key=${API_KEY}`);
    const data= await res.json();
 

    return data.results;
}
export const getOnTheAirTvShows = async() => {
    const res = await fetch(`${API_ENDPOINT}tv/on_the_air?api_key=${API_KEY}`);
    const data= await res.json();


    return data.results;
}


export const getAiringTodayTvShows = async() => {
    const res = await fetch(`${API_ENDPOINT}trending/tv/week?api_key=${API_KEY}`);
    const data= await res.json();


    return data.results;
}


export const getNowPlaying = async()=>{
    const res = await fetch(`${API_ENDPOINT}movie/now_playing?api_key=${API_KEY}`);
    const data= await res.json();
 

    return data.results;
}

export const getTopRated = async()=>{
    const res = await fetch(`${API_ENDPOINT}movie/top_rated?api_key=${API_KEY}`);
    const data= await res.json();


    return data.results;
}
export const getPopular = async()=>{
    const res = await fetch(`${API_ENDPOINT}movie/popular?api_key=${API_KEY}`);
    const data= await res.json();


    return data.results;
}

export const getMovieDetails = async(id:string) => {
    const res = await fetch(`${API_ENDPOINT}movie/${id}?api_key=${API_KEY}`);
    const data= await res.json();

    return data;

}

export const getRecommendations = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}movie/${id}/recommendations?api_key=${API_KEY}`);
    const data= await res.json();

    return data.results;
}