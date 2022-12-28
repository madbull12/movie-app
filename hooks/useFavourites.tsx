import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ISaved, Movie, MovieDetails } from "../interface";
import { supabase } from "../lib/supabase";



export default function useFavourites(movie?:MovieDetails | Movie ) {
    const [userFavourites,setUserFavourites] = useState<ISaved[]>();
    const { data:session }:any = useSession();
    const router = useRouter();
    const [favorited, setFavorited] = useState(false);
    const addedToFavourites = userFavourites?.find(
      (favourite: ISaved) => Number(favourite.movieId) === movie?.id
    );
    const deleteFavourite = async (movieId: number) => {
      console.log(movieId);
      const toastId = toast.loading("Deleting bookmark");
  
      try {
        const { data } = await supabase
          .from("favourite")
          .delete()
          .eq("movieId", movieId);
  
        toast.success(`Successfully deleted `, {
          id: toastId,
        });
        console.log(data);
      } catch (err) {
        toast.error("Oops!, There's an error");
        console.log(err);
      } finally {
        router.push("/favourites");
      }
    };
    const addFavourite = async (
      vote_avg: number,
      title: string,
      poster_path: string,
      movie_id: number,
    ) => {
      console.log("clicked");
      const toastId = toast.loading("Adding bookmark");
      try {
        await supabase.from("favourite").insert(
          [
            {
              title: title,
              vote_average: vote_avg,
              poster_path,
              userId: session?.user?.id as string,
              movieId: movie_id,
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
  

    useEffect(()=>{
      const getCurrentUserBookmarks = async() =>{
        const { data } = await supabase 
          .from("favourite")
          .select()
          .eq("userId",session?.user.id)
          .order("createdAt",{ ascending:false })
    
        // const findBookmark = data?.map((bookmark)=>bookmark.user_id === user?.id);
       
        // if (findBookmark) {
        //   setUserExists(true);
        // } else {
        //   setUserExists(false)
        // }
        setUserFavourites(data as ISaved[]);
        console.log(userFavourites)
        return data;
      }
  
      getCurrentUserBookmarks();
    },[session?.user.id]);

    return { userFavourites,addFavourite,deleteFavourite,favorited,setFavorited,addedToFavourites }
}