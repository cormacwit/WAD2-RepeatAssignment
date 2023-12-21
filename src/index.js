import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import {Link} from 'react-router-dom';
import { Home } from "@mui/icons-material";
import UpcomingPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import MoviesContextProvider from "./contexts/moviesContext";
import { ReactQueryDevtools } from 'react-query/devtools';
import AddMovieReviewPage from './pages/addMovieReviewPage';
////
import PopularMoviePage from './pages/popularMoviePage';
import TopRatedPage from "./pages/topRatedPage";
import TvMainPage from "./pages/tvSeriesPages/tvMainPage"
import TVSeriesContextProvider from "./contexts/tvSeriesContext";
import TvSeriesDetailsPage from "./pages/tvSeriesPages/tvSeriesDetailsPage";
import favouriteTvSeriesPage from "./pages/tvSeriesPages/favouriteTvSeriesPage";
import TvSeriesReviewPage from "./pages/tvSeriesPages/tvSeriesReviewsPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <TVSeriesContextProvider>
        <MoviesContextProvider>
      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/upcoming" element={ <UpcomingPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/popular" element={<PopularMoviePage />} />
        <Route path="/movies/toprated" element={<TopRatedPage />} />
        <Route path="/tvseries/favourites" element={<favouriteTvSeriesPage />} />
        <Route path="/tvseries/home" element={<TvMainPage />} />
        <Route path="/tseries/Reviews" element={< TvSeriesReviewPage/>} />
        <Route path="/tvseries/Details" element={< TvSeriesDetailsPage/>} />
      </Routes>
      </MoviesContextProvider>
      </TVSeriesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);