import { Prisma } from "@prisma/client";
import React from "react";
import Body from "../components/Body";
import Poster from "../components/Poster";
import Saved from "../components/Saved";
import useFavourites from "../hooks/useFavourites";
import { v4 } from "uuid"

const FavouritePage = () => {
    const { userFavourites } = useFavourites();
    console.log(userFavourites)
  return (
    <Body>
        <h1 className="text-3xl font-bold">Favourites</h1>
        <div className='row  scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md'>
          {userFavourites?.map((movie)=>(
                
            <Saved movie={movie} key={v4()} />
   
          ))}
        </div>
      
    </Body>
  );
};

export default FavouritePage;
