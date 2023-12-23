import React, { useState } from "react";
import Header from "../headerTvSeriesList";
import FilterTvSeriesCard from "../filterTvSeriesCard";
import TvSeriesList from "../tvSeriesList";
import Grid from "@mui/material/Grid";

function ListPageTemplate({ tvseries, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTvSeries = tvseries
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterTvSeriesCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TvSeriesList action={action} tvseries={displayedTvSeries}></TvSeriesList>
      </Grid>
    </Grid>
  );
}
export default ListPageTemplate;