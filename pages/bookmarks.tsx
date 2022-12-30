import { Prisma } from "@prisma/client";
import React from "react";
import Body from "../components/Body";
import Poster from "../components/Poster";
import Saved from "../components/Saved";
import useFavourites from "../hooks/useFavourites";
import { v4 } from "uuid";
import GridRow from "../components/GridRow";

const FavouritePage = () => {
  const { userFavourites } = useFavourites();
  console.log(userFavourites);
  return (
    <Body>
      <div className="space-y-4">
        <h1 className="text-3xl text-white font-bold">Favourite Movies</h1>
        {userFavourites?.filter((favourite) => favourite.type === "movie")
          .length !== 0 ? (
          <GridRow>
            {userFavourites
              ?.filter((favourite) => favourite.type === "movie")
              .map((movie) => (
                <Saved movie={movie} key={v4()} />
              ))}
          </GridRow>
        ) : (
          <p className="mt-4">No favourite added</p>
        )}
        <h1 className="text-3xl text-white font-bold">Favourite TV Shows</h1>
        {userFavourites?.filter((favourite) => favourite.type === "tv")
          .length !== 0 ? (
          <GridRow>
            {userFavourites
              ?.filter((favourite) => favourite.type === "tv")
              .map((movie) => (
                <Saved movie={movie} key={v4()} />
              ))}
          </GridRow>
        ) : (
          <p className="mt-4">No favourite added</p>
        )}
      </div>
    </Body>
  );
};

export default FavouritePage;
