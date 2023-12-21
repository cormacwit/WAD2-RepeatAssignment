import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import {getUpcoming} from '../api/tmdb-api';
import Spinner from '../components/spinner';
import UpcomingIcon from '../components/cardIcons/addToUpcoming'
import { useQuery } from 'react-query';


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
  const movies = data.results;
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  return(
    <PageTemplate 
    title="Upcoming Movies"
    movies={movies} 
    action={(movie) => {
      return <UpcomingIcon movie={movie} />
    }}
    />
)
}
export default UpcomingMoviesPage;