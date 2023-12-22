import React, { useState } from "react";

export const TVSeriesContext = React.createContext(null);

const TVSeriesContextProvider = (props) => {
    const [favourites, setFavourites, myReviews, setMyReviews] = useState( [] ) 

  const addToFavourites = (tvseries) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tvseries.id)) {
      newFavourites.push(tvseries.id);
    }
    setFavourites(newFavourites);
  };


  const removeFromFavourites = (tvseries) => {
    setFavourites( favourites.filter(
      (mId) => mId !== tvseries.id
    ) )
  };

  const addReview = (tvseries, review) => {
    setMyReviews( {...myReviews, [tvseries.id]: review } )
  };

 return (
    <TVSeriesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TVSeriesContext.Provider>
  );
};

export default TVSeriesContextProvider;