import React from "react";
import TvHeader from "../../components/tvSeriesComponents/headerTvSeries";
import sampleDataTvSeries from "./sampleDataTvSeries";

export default {
  title: "TV series Details Page/TVseriesHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader tvseries={sampleDataTvSeries} />;
Basic.storyName = "Default";