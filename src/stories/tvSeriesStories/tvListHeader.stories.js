import React from "react";
import headerTvSeriesList from "../components/tvSeriesComponents/headerTvSeries";


export default {
  title: "Home Page/Header",
  component: headerTvSeriesList,
};

export const Basic = () => <headerTvSeriesList title={'Discover Tv Series'} />;

Basic.storyName = "Default";