import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ISaved, Movie, MovieDetails } from "../interface";
import { trpc } from "../utils/trpc";

export default function useFavourites(movie?: MovieDetails | Movie) {
  const utils = trpc.useContext();
  const { data: session }: any = useSession();

  const { mutate: createBookmark } =
    trpc.bookmark.createBookmark.useMutation({
      // onMutate: () => {
      //   utils.favourite.getUserFavourites.cancel();
      //   const optimisticUpdate = utils.favourite.getUserFavourites.getData();
      //   if (optimisticUpdate) {
      //     utils.favourite.getUserFavourites.setData(optimisticUpdate);
      //   }
      // },
      onSettled: () => {
        utils.bookmark.getUserBookmarks.invalidate();
      },
    });
  const { mutate: deleteBookmark } =
    trpc.bookmark.deleteBookmark.useMutation({
      // onMutate: () => {
      //   utils.favourite.getUserFavourites.cancel();
      //   const optimisticUpdate = utils.favourite.getUserFavourites.getData();
      //   if (optimisticUpdate) {
      //     utils.favourite.getUserFavourites.setData(optimisticUpdate);
      //   }
      // },
      onSettled: () => {
        utils.bookmark.getUserBookmarks.invalidate();
      },
    });

  const { data: userFavourites } = trpc.favourite.getUserFavourites.useQuery();
  console.log(userFavourites);

  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const addedToFavourites = userFavourites?.find(
    (favourite) => favourite.movieId === movie?.id
  );
  const handleDeleteBookmark = async () => {
    const toastId = toast.loading("Deleting favourite");
    setBookmarked(false);

    try {
      await deleteBookmark({ bookmarkId: addedToFavourites?.id as string });

      toast.success(`Successfully deleted `, {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    }
  };
  const handleAddBookmark = async (
    vote_average: number,
    title: string,
    poster_path: string,
    movieId: number,
    release_date: string
  ) => {
    const toastId = toast.loading("Adding to favourites");
    setBookmarked(true);
    try {
      await createBookmark({
        vote_average,
        title,
        poster_path,
        movieId,
        release_date,
        type: router.pathname.includes("/movie") ? "movie" : "tv",
      });
      toast.success("Favourited", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    } finally {
      router.push("/bookmarks");
    }
  };

  return {
    userFavourites,
    handleAddBookmark,
    handleDeleteBookmark,
    bookmarked,
    addedToFavourites,
  };
}
