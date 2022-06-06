import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Movie } from '../interface'
import Poster from './Poster'

interface IMovie {
  trendingMovies:Movie[],
  nowPlayingMovies:Movie[]
  topRatedMovies:Movie[]
  popularMovies:Movie[]
}


const Dashboard = ({ trendingMovies,nowPlayingMovies,topRatedMovies,popularMovies }:IMovie) => {
  const router = useRouter();
  return (
    <div className='pl-6 bg-[#0D0C0F]  text-gray-500 ml-[190px] mx-auto max-w-4xl min-h-screen space-y-8'>
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Trending movies</h1>
        <div className='row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {trendingMovies.map((movie)=>(
                
                <Poster key={movie.id} movie={movie} size="big" type="movie"   />
   
   
          ))}
        </div>
      </div>
      
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Now playing</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {nowPlayingMovies.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"  />
            ))}
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Top Rated</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {topRatedMovies.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"  />
            ))}
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Popular</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {popularMovies.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"  />
            ))}
        </div>
      </div>
      


    </div>
  )
}

export default Dashboard