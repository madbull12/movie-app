import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ISaved, Movie, MovieDetails } from "../interface";
import { trpc } from "../utils/trpc";

export default function useFavourites(movie?: MovieDetails | Movie) {
  const utils = trpc.useContext();
  const { data: session }: any = useSession();

  const { mutate: createFavourite } =
    trpc.favourite.createFavourite.useMutation({
      // onMutate: () => {
      //   utils.favourite.getUserFavourites.cancel();
      //   const optimisticUpdate = utils.favourite.getUserFavourites.getData();
      //   if (optimisticUpdate) {
      //     utils.favourite.getUserFavourites.setData(optimisticUpdate);
      //   }
      // },
      onSettled: () => {
        utils.favourite.getUserFavourites.invalidate();
      },
    });

  const { data: userFavourites } = trpc.favourite.getUserFavourites.useQuery();
  console.log(userFavourites)

  const router = useRouter();
  const [favorited, setFavorited] = useState(false);
  const addedToFavourites = true;
  // const deleteFavourite = async (movieId: number) => {
  //   console.log(movieId);
  //   const toastId = toast.loading("Deleting favourite");
  //   setFavorited(false);

  //   try {
  //     const { data } = await supabase
  //       .from("Favourite")
  //       .delete()
  //       .eq("movieId", movieId);

  //     toast.success(`Successfully deleted `, {
  //       id: toastId,
  //     });
  //     console.log(data);
  //   } catch (err) {
  //     toast.error("Oops!, There's an error");
  //     console.log(err);
  //   } finally {
  //     router.push("/favourites");
  //   }
  // };
  const handleAddFavourite = async (
    vote_average: number,
    title: string,
    poster_path: string,
    movieId: number,
    release_date: string
  ) => {
    const toastId = toast.loading("Adding bookmark");
    setFavorited(true);
    try {
      await createFavourite({
        vote_average,
        title,
        poster_path,
        movieId,
        release_date,
      });
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

  return {
    userFavourites,
    handleAddFavourite,
    // deleteFavourite,
    favorited,
    addedToFavourites,
  };
}
