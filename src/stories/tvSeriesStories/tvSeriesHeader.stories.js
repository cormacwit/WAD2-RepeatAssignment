import React from "react";
import TvHeader from "../../components/tvSeriesComponents/headerTvSeries";
import sampleDataTvSeries from "./sampleDataTvSeries";

export default {
  title: "Movie Details Page/MovieHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader tvseries={sampleDataTvSeries} />;
Basic.storyName = "Default";