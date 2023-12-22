import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Link as RouterLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from './pages/upcomingMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';

////New additions// TV stuff
import PopularMoviePage from './pages/popularMoviePage';
import TopRatedPage from "./pages/topRatedPage";
import TvMainPage from "./pages/tvSeriesPages/tvMainPage"
import TVSeriesContextProvider from "./contexts/tvSeriesContext";
import MoviesContextProvider from "./contexts/moviesContext";
import TvSeriesDetailsPage from "./pages/tvSeriesPages/tvSeriesDetailsPage";
import FavouriteTvSeriesPage from "./pages/tvSeriesPages/favouriteTvSeriesPage";
import TvSeriesReviewPage from "./pages/tvSeriesPages/tvSeriesReviewsPage";

//Login and Register stuff
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/siteHeader";

// Rename Link from 'react-router-dom' to avoid conflicts
const Link = RouterLink;

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
      <AuthContextProvider>
        <SiteHeader />
        <TVSeriesContextProvider>
        <MoviesContextProvider>
      <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        </Route>
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
        <Route exact path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={ <SignUpPage /> } />
      </Routes>
      </MoviesContextProvider>
      </TVSeriesContextProvider>
      </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);