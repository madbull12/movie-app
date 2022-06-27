export const API_ENDPOINT = "https://api.themoviedb.org/3/"
export const API_KEY= process.env.NEXT_PUBLIC_TMDB_API_KEY

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
export const getCredits = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}movie/${id}/credits?api_key=${API_KEY}`);
    const data= await res.json();

    return data.cast;
}

export const getTVCasts = async(id:string) => {
    const res = await fetch(`${API_ENDPOINT}tv/${id}/credits?api_key=${API_KEY}`);
    const data= await res.json();
    
    return data.cast;
}

export const getSimilar = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}movie/${id}/similar?api_key=${API_KEY}`);
    const data= await res.json();

    return data.results;
}
export const getReviews = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}movie/${id}/reviews?api_key=${API_KEY}`);
    const data= await res.json();

    return data.results;
}

export const getTVDetails = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}tv/${id}?api_key=${API_KEY}`);
    const data= await res.json();

    return data;
}

export const getSimilarTVShows = async(id:string)=>{
    const res = await fetch(`${API_ENDPOINT}tv/${id}/similar?api_key=${API_KEY}`);
    const data= await res.json();

    return data.results;
}

export const getSeasonDetails = async(tvId:string,seasonId:string) => {
    const res = await fetch(`${API_ENDPOINT}tv/${tvId}/season/${seasonId}?api_key=${API_KEY}`);
    const data= await res.json();

    return data;
}

export const getDiscoveryMovies = async() => {
    const res = await fetch(`${API_ENDPOINT}discover/movie?api_key=${API_KEY}&vote_average.gte=9`);
    const data= await res.json();

    return data.results;
}
export const getDiscoveryTVs = async() => {
    const res = await fetch(`${API_ENDPOINT}discover/tv?api_key=${API_KEY}&vote_average.gte=9`);
    const data= await res.json();

    return data.results;
}
export const getMovieAnimation = async() => {
    const res = await fetch(`${API_ENDPOINT}discover/movie?api_key=${API_KEY}&with_genres=16`);
    const data= await res.json();

    return data.results;
}
export const getTvAnimation = async() => {
    const res = await fetch(`${API_ENDPOINT}discover/tv?api_key=${API_KEY}&with_genres=16`);
    const data= await res.json();

    return data.results;
}
export const getMovieThriller = async() => {
    const res = await fetch(`${API_ENDPOINT}discover/movie?api_key=${API_KEY}&with_genres=53`);
    const data= await res.json();

    return data.results;
}

// export const getSearchMovies = async(searchTerm:string)=>{
//     const res = await fetch(`${API_ENDPOINT}search/movie?api_key=${API_KEY}&query=${searchTerm}`);
//     const data= await res.json();

//     return data.results;
// }