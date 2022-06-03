import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import Poster from '../../components/Poster'
import { Movie, MovieDetails } from '../../interface'
import { getTrendingMovies,getNowPlaying,getTopRated,getPopular, getMovieDetails, getRecommendations } from '../api/movie'

interface IMovieDetails {
    movieDetails:MovieDetails;
    movieRecommendations:Movie[]
}

const MovieDetailsPage = ({ movieDetails,movieRecommendations }:IMovieDetails) => {

  return (
    <main className=' bg-[#0D0C0F] space-y-8 text-gray-500 ml-[190px] mx-auto max-w-4xl min-h-screen'>
        <div className='relative'>
            <Image alt={movieDetails.title} src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} width="100%" height={50} layout="responsive" objectFit='cover'  />
            <div className=' w-[90%] px-2 py-4  -mt-20 text-white backdrop-sepia-0 bg-black/30 rounded-lg mx-auto space-y-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>{movieDetails.title}</h1>
                    <BiHeart size={24} className="cursor-pointer" />
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold'>Genres:</p>
                    {movieDetails.genres.map((genre,i)=>(
                        <p key={genre.id} className="text-base">
                            {!(i === movieDetails.genres.length - 1) ? genre.name + "," : genre.name}
                        </p>
                    ))}
                </div>
                <div>
                    <p className='font-bold'>Duration: <span className='font-normal'>{movieDetails.runtime} minutes</span></p>
                </div>
                <div>
                    <p className='font-bold'>Rating: <span className='font-normal'>{movieDetails.vote_average}</span></p>
                </div>
            </div>
        </div>
        <div className='text-gray-500 px-8 py-4 space-y-4'>
            <div>
                <h1 className='text-xl font-bold'>Plot</h1>
                <p>
                    {movieDetails.overview}
                </p>
            </div>
            <div className='space-y-2'>
                <h1 className='text-xl font-bold'>Recommendations for you</h1>
                <div className='row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md'>
                    {movieRecommendations.slice(0,12).map((movie)=>(
                        <Poster key={movie.id} movie={movie} size="big"   />
                    ))}
                </div>
                    
            </div>
        </div>
        
     
        

    </main>
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
        fallback:'blocking'
    }
}

export const getStaticProps = async({ params }:any) => {
    const [movieDetails,movieRecommendations] = ([await getMovieDetails(params.movieId),await getRecommendations(params.movieId)])
    
    return {
        props:{
            movieDetails,
            movieRecommendations
        }
    }

}


export default MovieDetailsPage