import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../interface";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

import toast from "react-hot-toast";
import Button from "./Button";
import { Favourite } from "@prisma/client";
import useBookmarks from "../hooks/useBookmarks";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

// npm i --save-dev @types/react-rating-stars-component

interface IMovie {
  movie: Movie;
  size: "normal" | "big";
  type: string;
  internal?: boolean;
}

const Poster = ({ movie, size, type, internal }: IMovie) => {
  const router = useRouter();
  const {
    addedToBookmarks,
    handleDeleteBookmark,
    handleAddBookmark,
    bookmarked,
  } = useBookmarks(movie);

  return (
    <section
      className="relative cursor-pointer"
      onClick={() =>
        router.push(
          internal ? `/${type}/${movie?.movie_id}` : `/${type}/${movie.id}`
        )
      }
    >
      {/* `/${type}/${movie.id}` */}
      <div className="z-10">
        <Image
          alt={movie.name || movie.title}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={`${size === "big" ? "500" : "200"}`}
          height={`${size === "big" ? "300" : "250"}`}
          objectFit="cover"
          className="w-full rounded-xl z-[100] cursor-pointer"
        />
      </div>

      {/* <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={`${size === "big" ? "500":"200"}`}  height={`${size === "big" ? "300":"250"}`} objectFit='cover' className="w-full rounded-xl cursor-pointer" /> */}
      {size === "normal" && (
        <div className="absolute top-4 z-[100] left-4 flex gap-1.5 items-center bg-black opacity-75 rounded-full px-2">
          <AiFillStar color="yellow" />
          <p className="text-white">{movie.vote_average.toFixed(1)}</p>
        </div>
      )}
      <div
        className={`flex ${
          size === "big" ? "items-center" : ""
        } justify-between w-[95%] absolute z-[500] bottom-4 left-4 ${
          size === "normal" ? "flex-col" : ""
        }`}
      >
        <div className={`text-white  ${size === "big" ? "w-1/2" : "w-3/4"}`}>
          <p
            className={`${
              size === "big" ? "text-lg" : "text-base"
            } font-bold text-white truncate `}
          >
            {movie.title || movie.name}
          </p>
          <p>{movie?.release_date?.slice(0, 4)}</p>
          {size === "big" && (
            <div className="flex items-center">
              {Array(Math.round(movie.vote_average / 2))
                .fill("")
                .map((_, i) => (
                  <AiFillStar color="yellow" size={18} key={i} />
                ))}
              {movie.vote_average.toFixed(1)}
            </div>
          )}
        </div>
        <div className="flex gap-2 text-white items-center p-1 justify-between mt-2 ">
          <button className="bg-red-600 font-bold hover:bg-red-700 whitespace-nowrap rounded-full px-4 py-2 opacity-75">
            Watch now
          </button>
          {addedToBookmarks || bookmarked ? (
            <BsBookmarkStarFill
              size={24}
              color="#EC1C24"
              className="cursor-pointer"
              onClick={() => handleDeleteBookmark()}
            />
          ) : (
            <BsBookmarkStar
              size={24}
              className="cursor-pointer"
              onClick={() =>
                handleAddBookmark(
                  movie.vote_average,
                  movie.title || movie.name as string,
                  movie.poster_path as string,
                  movie.id as number,
                  movie.release_date || movie.first_air_date as string
                )
              }
            />
          )}
          {/* {movieIds?.find((_movie: any) => _movie.movie_id === movie?.id) ? (
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert bg-white/30"
                onClick={() => deleteBookmark(movie?.id)}
              >
                <AiOutlineMinus />
              </button>
            ) : (
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert bg-white/30"
                onClick={() =>
                  addBookmark(
                    movie?.vote_average,
                    `${movie?.title || movie?.name}`,
                    `${movie?.poster_path}`,
                    Number(movie?.id),
                    movie?.name ? false : true
                  )
                }
              >
                <AiOutlinePlus />
              </button>
            )} */}
          {/* <Button addBookmark={addBookmark} /> */}

          {/* <button className='w-10 h-10 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert bg-white/30' onClick={()=>addBookmark(movie?.vote_average,`${movie?.title || movie?.name}`,`${movie?.poster_path}`,Number(movie?.id),movie?.name ?  false :  true)}>
              {movieIds?.find((_movie:any)=>_movie.movie_id === movie?.id) ? <AiOutlineMinus /> : <AiOutlinePlus /> }

            </button> */}
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b z-[100] from-transparent via-[#000000cb] to-black "></div>
    </section>
  );
};

export default Poster;
