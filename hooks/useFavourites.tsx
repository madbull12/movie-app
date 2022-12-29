import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ISaved, Movie, MovieDetails } from "../interface";
import { supabase } from "../lib/supabase";

export default function useFavourites(movie?: MovieDetails | Movie) {
  const [userFavourites, setUserFavourites] = useState<ISaved[]>();
  const { data: session }: any = useSession();
  console.log(session)
  const router = useRouter();
  const [favorited, setFavorited] = useState(false);
  const addedToFavourites = userFavourites?.find(
    (favourite: ISaved) => Number(favourite.movieId) === movie?.id
  );
  const deleteFavourite = async (movieId: number) => {
    console.log(movieId);
    const toastId = toast.loading("Deleting favourite");
    setFavorited(false)

    try {
      const { data } = await supabase
        .from("Favourite")
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
    vote_average: number,
    title: string,
    poster_path: string,
    movieId: number,
    release_date:string
  ) => {
    console.log("clicked");
    const toastId = toast.loading("Adding bookmark");
    setFavorited(true)
    try {
      await supabase.from("favourite").insert(
        [
          {
            title,
            vote_average,
            poster_path,
            userId: session?.user?.id as string,
            movieId,
            release_date
          },
        ],
        {
          returning: "minimal",
        }
      );
      toast.success("Favourited", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    } finally {
      router.push("/favourites");
    }
  };

  useEffect(() => {
    const getCurrentUserBookmarks = async () => {
      const { data } = await supabase
        .from("Favourite")
        .select()
        .eq("userId", session?.user.id)
        .order("createdAt", { ascending: false });

      // const findBookmark = data?.map((bookmark)=>bookmark.user_id === user?.id);

      // if (findBookmark) {
      //   setUserExists(true);
      // } else {
      //   setUserExists(false)
      // }
      setUserFavourites(data as ISaved[]);
      console.log(userFavourites);
      return data;
    };

    getCurrentUserBookmarks();
  }, [session?.user.id]);

  return {
    userFavourites,
    addFavourite,
    deleteFavourite,
    favorited,
    addedToFavourites,
  };
}
