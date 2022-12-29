import React from "react";
import Body from "../components/Body";
import useFavourites from "../hooks/useFavourites";

const FavouritePage = () => {
    const { userFavourites } = useFavourites();
    console.log(userFavourites)
  return (
    <Body>
        
    </Body>
  );
};

export default FavouritePage;
