import React from "react";
import TvSeriesDetails from "../../components/tvSeriesComponents/tvSeriesDetails";
import sampleDataTvSeries from "./sampleDataTvSeries";

export default {
  title: "Tv Series Details Page/TvSeriesDetails",
  component: MovieDetails,
};

export const Basic = () => <TvSeriesDetails tvseries={sampleDataTvSeries} />;
Basic.storyName = "Default";