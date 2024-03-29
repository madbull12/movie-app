import React from 'react'
import useUserBookmarks from '../hooks/useFavourites';
import { Movie } from '../interface'
import Body from './Body';
import Poster from './Poster'
import Search from './Search';

interface ITVShows {
    trendingTvShows:Movie[];
    airingToday:Movie[],
    onTheAir:Movie[]
}

const TVDashboard = ({ trendingTvShows,airingToday,onTheAir }:ITVShows) => {
  return (
    <Body>
        <div className='md:hidden'>
          <Search  />
        </div>
      <article className='space-y-2'>
        <h1 className='text-white font-bold text-2xl'>Trending this week</h1>
          <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
            {trendingTvShows.map((show)=>(
              <Poster key={show.id} movie={show} size="big" type="tv-series"   />
            ))}
          </div>
      </article>
        
      <article className='space-y-2'>
        <h1 className='text-white font-bold text-2xl'>Airing today</h1>

        <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {airingToday.map((show)=>(
            <Poster key={show.id} movie={show} size="normal" type="tv-series"   />
          ))}
        </div>
      </article>
      <article className='space-y-2'>
        <h1 className='text-white font-bold text-2xl'>On the air</h1>

        <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {onTheAir.map((show)=>(
            <Poster key={show.id} movie={show} size="normal" type="tv-series"  />
          ))}
        </div>
      </article>
        

    </Body>
  )
}

export default TVDashboard