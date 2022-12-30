import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ISaved, Movie, MovieDetails, TVDetails } from "../interface";
import { trpc } from "../utils/trpc";

export default function useBookmarks(movie?: MovieDetails | Movie) {
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

  const { data: userBookmarks } = trpc.bookmark.getUserBookmarks.useQuery();
  console.log(userBookmarks);

  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const addedToBookmarks = userBookmarks?.find(
    (bookmark) => bookmark.movieId === movie?.id
  );
  const handleDeleteBookmark = async () => {
    const toastId = toast.loading("Deleting bookmark");
    setBookmarked(false);

    try {
      await deleteBookmark({ bookmarkId: addedToBookmarks?.id as string });

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
    const toastId = toast.loading("Adding to bookmarks");
    setBookmarked(true);
    try {
      await createBookmark({
        vote_average,
        title,
        poster_path,
        movieId,
        release_date,
        type:movie?.name ? "tv" : "movie" ,
      });
      toast.success("Bookmarked", {
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
    userBookmarks,
    handleAddBookmark,
    handleDeleteBookmark,
    bookmarked,
    addedToBookmarks,
  };
}
