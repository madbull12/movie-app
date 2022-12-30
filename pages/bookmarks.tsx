import { Prisma } from "@prisma/client";
import React from "react";
import Body from "../components/Body";
import Poster from "../components/Poster";
import Saved from "../components/Saved";
import useFavourites from "../hooks/useFavourites";
import { v4 } from "uuid";
import GridRow from "../components/GridRow";
import useBookmarks from "../hooks/useBookmarks";

const FavouritePage = () => {
  const { userBookmarks } = useBookmarks();
  console.log(userBookmarks);
  return (
    <Body>
      <div className="space-y-4">
        <h1 className="text-3xl text-white font-bold">Bookmarked Movies</h1>
        {userBookmarks?.filter((bookmark) => bookmark.type === "movie")
          .length !== 0 ? (
          <GridRow>
            {userBookmarks
              ?.filter((bookmark) => bookmark.type === "movie")
              .map((movie) => (
                <Saved movie={movie} key={v4()} />
              ))}
          </GridRow>
        ) : (
          <p className="mt-4">No bookmark added</p>
        )}
        <h1 className="text-3xl text-white font-bold">Bookmarked TV Shows</h1>
        {userBookmarks?.filter((bookmark) => bookmark.type === "tv")
          .length !== 0 ? (
          <GridRow>
            {userBookmarks
              ?.filter((bookmark) => bookmark.type === "tv")
              .map((movie) => (
                <Saved movie={movie} key={v4()} />
              ))}
          </GridRow>
        ) : (
          <p className="mt-4">No bookmark added</p>
        )}
      </div>
    </Body>
  );
};

export default FavouritePage;
