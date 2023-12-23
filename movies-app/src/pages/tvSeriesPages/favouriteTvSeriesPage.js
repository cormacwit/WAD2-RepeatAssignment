import React, { useContext } from "react";
import TemplatePage from "../../components/tvSeriesComponents/templateTvSeriesPage";
import { TVSeriesContext } from "../../contexts/tvSeriesContext";
import { useQueries } from "react-query";
import { getTVseries } from "../../api/tmdb-api";
import RemoveFromFavouritesIcon from "../../components/tvCardIcons/removeFromFavouritesTvSeries";
import WriteReviewIcon from "../../components/tvCardIcons/writeReviewTvSeries";
import Spinner from '../../components/spinner'

const FavouriteTvSeriesPage = () => {
  const {favourites: tvseriesIds } = useContext(TVSeriesContext);

  // Create an array of queries and run in parallel.
  const favouriteTvSerieseQueries = useQueries(
    tvseriesIds.map((tvseriesId) => {
      return {
        queryKey: ["tvseries", { id: tvseriesId }],
        queryFn: getTVseries,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvSerieseQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvseries = favouriteTvSerieseQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <TemplatePage
      title="Favourite Tv Series"
      tvseries={tvseries}
      action={(tvseries) => {
        return (
          <>
            <RemoveFromFavouritesIcon tvseries={tvseries} />
            <WriteReviewIcon tvseries={tvseries} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvSeriesPage;