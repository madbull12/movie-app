import React from 'react'
import { Movie } from '../interface'
import Poster from './Poster'

interface ITVShows {
    trendingTvShows:Movie[];
    airingToday:Movie[],
    onTheAir:Movie[]
}

const TVDashboard = ({ trendingTvShows,airingToday,onTheAir }:ITVShows) => {
  return (
    <section className='pl-6 bg-[#0D0C0F]  text-gray-500 ml-[190px] mx-auto max-w-4xl min-h-screen space-y-8'>
      <article>
        <h1 className='text-white font-bold text-2xl'>Trending this week</h1>
          <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
            {trendingTvShows.map((show)=>(
              <Poster key={show.id} movie={show} size="big" type="tv-series"  />
            ))}
          </div>
      </article>
        
      <article>
        <h1 className='text-white font-bold text-2xl'>Airing today</h1>

        <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {airingToday.map((show)=>(
            <Poster key={show.id} movie={show} size="normal" type="tv-series"  />
          ))}
        </div>
      </article>
      <article>
        <h1 className='text-white font-bold text-2xl'>On the air</h1>

        <div className='row scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {onTheAir.map((show)=>(
            <Poster key={show.id} movie={show} size="normal" type="tv-series"  />
          ))}
        </div>
      </article>
        

    </section>
  )
}

export default TVDashboard