import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../interface";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/UserContext";
import toast from "react-hot-toast";
import useUserBookmarks from "../hooks/useUserBookmarks";
import Button from "./Button";

// npm i --save-dev @types/react-rating-stars-component

interface IMovie {
  movie: Movie;
  size: string;
  type: string;
  movieIds?: [number];
  internal?: boolean;
}

const Poster = ({ movie, size, type, movieIds, internal }: IMovie) => {
  const router = useRouter();
  const { user } = useAuth();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const addBookmark = async (
    vote_avg: number,
    title: string,
    poster_path: string,
    movie_id: number,
    isMovie: boolean
  ) => {
    console.log("clicked");
    const toastId = toast.loading("Adding bookmark");
    try {
      await supabase.from("bookmarks").insert(
        [
          {
            title: title,
            vote_average: vote_avg,
            poster_path,
            user_id: user?.id,
            movie_id: movie_id,
            isMovie,
          },
        ],
        {
          returning: "minimal",
        }
      );
      toast.success("Bookmarked created", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    } finally {
      router.push("/bookmarks");
    }
  };

  const deleteBookmark = async (movieId: number) => {
    console.log(movieId);
    const toastId = toast.loading("Deleting bookmark");

    try {
      const { data } = await supabase
        .from("bookmarks")
        .delete()
        .eq("movie_id", movieId);

      toast.success("Bookmarked deleted", {
        id: toastId,
      });
      console.log(data);
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    } finally {
      router.push("/bookmarks");
    }
  };

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
          className="w-full rounded-xl z-[999] cursor-pointer"
        />
      </div>

      {/* <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={`${size === "big" ? "500":"200"}`}  height={`${size === "big" ? "300":"250"}`} objectFit='cover' className="w-full rounded-xl cursor-pointer" /> */}
      {size === "normal" && (
        <div className="absolute top-4 z-[999] left-4 flex gap-1.5 items-center bg-black opacity-75 rounded-full px-2">
          <AiFillStar color="yellow" />
          <p className="text-white">{movie.vote_average.toFixed(1)}</p>
        </div>
      )}
      <div
        className={`flex ${
          size === "big" ? "items-center" : ""
        } justify-between w-[95%] absolute z-[1000] bottom-4 left-4 ${
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
        {!internal && (
          <div className="flex gap-2 text-white items-center mt-2 ">
            <button className="bg-red-600 font-bold hover:bg-red-700 whitespace-nowrap rounded-full px-4 py-2 opacity-75">
              Watch now
            </button>
            {movieIds?.find((_movie: any) => _movie.movie_id === movie?.id) ? (
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
            )}
            {/* <Button addBookmark={addBookmark} /> */}

            {/* <button className='w-10 h-10 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert bg-white/30' onClick={()=>addBookmark(movie?.vote_average,`${movie?.title || movie?.name}`,`${movie?.poster_path}`,Number(movie?.id),movie?.name ?  false :  true)}>
              {movieIds?.find((_movie:any)=>_movie.movie_id === movie?.id) ? <AiOutlineMinus /> : <AiOutlinePlus /> }

            </button> */}
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b z-[999] from-transparent via-[#000000cb] to-black "></div>
    </section>
  );
};

export default Poster;
