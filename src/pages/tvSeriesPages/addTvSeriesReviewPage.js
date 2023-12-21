import React from "react";
import PageTemplate from "../../components/tvSeriesComponents/templateTvSeriesListPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVseries } from "../../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const location = useLocation()
  const { tvseriesId } = location.state;
  const { data: tvseries, error, isLoading, isError } = useQuery(
    ["tvseries", { id: tvseriesId }],
    getTVseries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate tvseries={tvseries}>
      <ReviewForm tvseries={tvseries} />
    </PageTemplate>
  );
};

export default WriteReviewPage;