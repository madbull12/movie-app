import Image from 'next/image'
import React from 'react'
import { Movie } from '../interface'
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'

// npm i --save-dev @types/react-rating-stars-component

interface IMovie {
    movie:Movie
    size:string,
    type:string
}

const Poster = ({ movie,size,type }:IMovie) => {
  const router = useRouter();

  return (
    <section className='relative'>
        <Link href={`/${type}/${movie.id}`}>
          <Image  alt={movie.name || movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={`${size === "big" ? "500":"200"}`}  height={`${size === "big" ? "300":"250"}`} objectFit='cover' className="w-full rounded-xl cursor-pointer" />

        </Link>
       {/* <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={`${size === "big" ? "500":"200"}`}  height={`${size === "big" ? "300":"250"}`} objectFit='cover' className="w-full rounded-xl cursor-pointer" /> */}
        {size === "normal" && (
          <div className='absolute top-4 left-4 flex gap-1.5 items-center bg-black opacity-75 rounded-full px-2'>
            <AiFillStar color="yellow" />
            <p className='text-white'>{movie.vote_average.toFixed(1)}</p>
          </div>
        )}
        <div className={`flex ${size === "big" ? "items-center" : ""} justify-between w-[95%] absolute bottom-4 left-4 ${size === "normal" ? "flex-col" : ""}`}>
          <div className='text-white '>
            <p className={`${size === "big" ? "text-lg" : "text-base"} font-bold text-white text-ellipsis`}>{movie.title || movie.name}</p>
            <p>{movie?.release_date?.slice(0,4)}</p>
            {size === "big" && (
            <div className='flex items-center'>
              {Array(Math.round(movie.vote_average/2)).fill("").map((_,i)=>(
                <AiFillStar color="yellow" size={18} key={i} />
              ))}
              {movie.vote_average.toFixed(1)}
            </div>
            )}
        
            
          </div>
          <div className='flex gap-2 text-white items-center mt-2'>
                <button className='bg-red-600 font-bold hover:bg-red-700 whitespace-nowrap rounded-full px-4 py-2 opacity-75'>Watch now</button>
                <button className='w-10 h-10 rounded-full backdrop-opacity-10 backdrop-invert bg-white/30'>+</button>
          </div>
          <div className='absolute bottom-0 right-0 darker'></div>
        </div>
    </section>
  )
}

export default Poster