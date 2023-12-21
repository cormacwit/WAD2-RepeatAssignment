import React from "react";
import { getTVseries } from "../../api/tmdb-api";
import TemplatePage from "../../components/tvSeriesComponents/templateTvSeriesPage";
import { useQuery } from 'react-query';
import Spinner from '../../components/spinner';
import AddToFavouritesIcon from "../../components/tvCardIcons/addtoFavouritesTvSeries";

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('TVHomePage', getTVseries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvseries = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = tvseries.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (tvseriesId) => true 

  return (
    <TemplatePage
      title="Discover tvseries"
      tvseries={tvseries}
      action={(tvseries) => {
        return <AddToFavouritesIcon tvseries={tvseries} />
      }}
    />
);
};
export default HomePage;