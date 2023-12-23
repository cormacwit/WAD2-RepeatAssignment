import React from "react";
import { useLocation } from "react-router-dom";
import TemplatePage from "../../components/tvSeriesComponents/templateTvSeriesPage";
import TvSeriesReview from "../../components/tvSeriesComponents/tvSeriesReview";

const TvSeriesReviewPage = (props) => {
  let location = useLocation();
  const {tvseries, review} = location.state;

  return (
    <TemplatePage tvseries={tvseries}>
      <TvSeriesReview review={review} />
    </TemplatePage>
  );
};

export default TvSeriesReviewPage;