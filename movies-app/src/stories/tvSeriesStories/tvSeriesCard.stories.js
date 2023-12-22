import React from "react";
import TvSeriesCard from "../../components/tvSeriesComponents/tvSeriesCard";
import sampleDataTvSeries from "./sampleDataTvSeries";

export default {
  title: "Home Page/TvSeriesCard",
  component: TvSeriesCard,
};

export const Basic = () => {
  return (
    <TvSeriesCard
      tvseries={sampleDataTvSeries}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...sampleDataTvSeries, poster_path: undefined };
  return (
    <TvSeriesCard
      tvseries={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";