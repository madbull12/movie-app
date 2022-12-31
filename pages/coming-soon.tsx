import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { v4 } from 'uuid'
import Body from '../components/Body'
import GridRow from '../components/GridRow'
import Poster from '../components/Poster'
import { Movie } from '../interface'
import { getUpcoming } from './api/movie'

interface IProps {
  upcomingMovies:Movie[]
}

const ComingSoon = ({ upcomingMovies }:IProps) => {
  return (
    <Body>
      <h1 className='text-white text-3xl font-bold'>Upcoming movies</h1>
        <GridRow>
            {upcomingMovies?.map((movie)=>(
              <Poster key={v4()} size="normal" type="movie" movie={movie} />
            ))}
        </GridRow>
    </Body>
  )
}


export const getServerSideProps = async(req:NextApiRequest, res:NextApiResponse) => {

  const upcomingMovies = await getUpcoming();


  return {
    props:{
      upcomingMovies:upcomingMovies || null,

    }
  }
}

export default ComingSoon