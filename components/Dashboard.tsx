import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchState } from '../atoms/searchAtom'
import useUserBookmarks from '../hooks/useFavourites'
import { Movie } from '../interface'
// import { supabase } from '../lib/supabase'
import Body from './Body'
import Poster from './Poster'
import Search from './Search'

interface IMovie {
  trendingMovies:Movie[],
  nowPlayingMovies:Movie[]
  topRatedMovies:Movie[]
  popularMovies:Movie[]
}


const Dashboard = ({ trendingMovies,nowPlayingMovies,topRatedMovies,popularMovies }:IMovie) => {
  

  const { data:session } = useSession();
  // const [bookmarkExists,setBookmarkExists] = useState<boolean>();



  return (
    <Body>
      <div>
      <div className='md:hidden'>
          <Search />
        </div>

        <h1 className='font-bold text-2xl text-white mb-2'>Trending movies</h1>
        <div className='row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {trendingMovies?.map((movie)=>(
                
                <Poster key={movie.id} movie={movie} size="big" type="movie"    />
   
   
          ))}
        </div>
      </div>
      
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Now playing</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {nowPlayingMovies?.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"   />
            ))}
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Top Rated</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {topRatedMovies?.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"   />
            ))}
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-white mb-2'>Popular</h1>

        <div className="row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {popularMovies?.map((movie)=>(
              <Poster key={movie.id} movie={movie} size="normal" type="movie"   />
            ))}
        </div>
      </div>
      


    </Body>
  )
}

export default Dashboard