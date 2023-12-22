import React from "react";
import { useParams } from 'react-router-dom';
import TvSeriesDetails from "../../components/tvSeriesComponents/tvSeriesDetails";
import TemplatePage from "../../components/tvSeriesComponents/templateTvSeriesPage";
import { getTVseries } from '../../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../../components/spinner'

const TvSeriesDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tvseries, error, isLoading, isError } = useQuery(
    ["tvseries", { id: id }],
    getTVseries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvseries ? (
        <>
          <TemplatePage tvseries={tvseries}>
            <TvSeriesDetails tvseries={tvseries} />
          </TemplatePage>
        </>
      ) : (
        <p>Waiting for Tv Series details</p>
      )}
    </>
  );
};

export default TvSeriesDetailsPage;
