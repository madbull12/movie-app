import { Favourite } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { trpc } from "../utils/trpc";

const Saved = ({ movie }: { movie: Favourite }) => {
  const router = useRouter();
  const utils = trpc.useContext();
  const { mutate: deleteFavourite } =
    trpc.favourite.deleteFavourite.useMutation({

      onSettled: () => {
        utils.favourite.getUserFavourites.invalidate();
      },
    });
  const { mutate: deleteBookmark } =
    trpc.bookmark.deleteBookmark.useMutation({

      onSettled: () => {
        utils.bookmark.getUserBookmarks.invalidate();
      },
    });

  return (
    <section onClick={()=>router.push(`/${movie.type === "tv" ? "tv-series" : "movie"}/${movie.movieId}`)} className="relative cursor-pointer">
      {/* `/${type}/${movie.id}` */}
      <div className="z-10">
        <Image
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={200}
          height={250}
          objectFit="cover"
          className="w-full rounded-xl z-[100] cursor-pointer"
        />
      </div>

      {/* <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={`${size === "big" ? "500":"200"}`}  height={`${size === "big" ? "300":"250"}`} objectFit='cover' className="w-full rounded-xl cursor-pointer" /> */}
      <div className="absolute top-4 z-[100] left-4 flex gap-1.5 items-center bg-black opacity-75 rounded-full px-2">
        <AiFillStar color="yellow" />
        <p className="text-white">{movie.vote_average.toFixed(1)}</p>
      </div>
      <div
        className="flex justify-between w-[95%] absolute z-[500] bottom-4 left-4 flex-col"
      >
        <div className={`text-white w-3/4`}>
          <p
            className={`text-base font-bold text-white truncate `}
          >
            {movie.title}
          </p>
          <p>{movie?.release_date?.slice(0, 4)}</p>
   
        </div>
   
          <div className="flex gap-2 text-white justify-between items-center mt-2 p-1">
            <button className="bg-red-600 font-bold hover:bg-red-700 whitespace-nowrap rounded-full px-4 py-2 opacity-75">
              Watch now
            </button>
            <button onClick={(e)=>{
              e.stopPropagation();
              router.pathname === "/favourites" ? deleteFavourite({ favouriteId:movie.id })  : deleteBookmark({ bookmarkId:movie.id })
              
            }}>
              <BiTrash className="text-xl" />
            </button>
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

export default Saved;
