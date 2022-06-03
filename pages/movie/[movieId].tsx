import { useRouter } from 'next/router'
import React from 'react'
import { Movie } from '../../interface'
import { getTrendingMovies,getNowPlaying,getTopRated,getPopular, getMovieDetails } from '../api/movie'

const MovieDetailsPage = ({ movieDetails }:any) => {

  return (
    <div className='flex justify-center'>
        
    </div>
  )
}

export const getStaticPaths = async() => {
    const [trendingMovies,nowPlayingMovies,topRatedMovies,popularMovies] = ([await getTrendingMovies(),await getNowPlaying(),await getTopRated(),await getPopular()]);

    const trendingIds = trendingMovies.map((movie:Movie)=>movie.id);
    const nowPlayingIds= nowPlayingMovies.map((movie:Movie)=>movie.id);
    const topRatedIds = topRatedMovies.map((movie:Movie)=>movie.id);
    const popularIds = popularMovies.map((movie:Movie)=>movie.id);

    const ids = [...trendingIds,...nowPlayingIds,...topRatedIds,...popularIds];

    const paths = ids.map((id)=>({
        params:{
            movieId:id.toString()
        }
    }))
    
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async({ params }:any) => {
    const movieDetails = await getMovieDetails(params.movieId)

    return {
        props:{
            movieDetails
        }
    }

}


export default MovieDetailsPage