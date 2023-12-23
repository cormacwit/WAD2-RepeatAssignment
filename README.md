# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Cormac Farrell

## Overview.

### New Pages.

-Popular Movies Page
-Top rated Moves Page
-Tv series main page
-Tv series details page
-Tv series review page
-Tv series Favourites page
### New Features.

-Added Tv series and favouriting Tv series (non functional due to an api error with getting the series images)
-Popular and Top Rated Movie tracking 

## Setup requirements.

+ Install dependencies from the labs.
+ "npm start" on both "movies-api" and "moviesApp".
+ run "mongod" with "movies_db" present.


## TMDB endpoints from CA1.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 
/ - Homepage
/reviews/form - Users reviews of a movie.
/movies/favourites - Favourited Movies
/movies/:id - page for a selected movie
/reviews/:id - Page of a selected movies review
/movies/upcoming - Page showing upcoming movies
/movies/popular - Page showing popular movies
/movies/toprated - Page showing top rated movies
//
/tv/:id - page showing a selected tv series
/reviewsTV/form - Users reviews of a selected TV show.
/tv/favourites - User's favourited TV shows.
/reviewsTV/:id - Page of for a specific TV Show review
/login - Allows an already registered user to sign in and view their favourite movies

## Features.
+ Changed all of the main TMDB API Calls (for movies or tv series ect) in the React App to be calling from our own API, tdmb now servies as a secondary API calling from our original API (API located in movies-API)
+  Added a Login and Register page, where users can make new accounts and then log into them, while also being able to log out of them on the Register page.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

/discover/movie - Main movies page
/movie/${id} - Get the details of a specific movie
/genre/movie/list - Get the list of genres for movies
/movie/${id}/reviews - Get the reviews of a selected movie
/movie/${id}/images - Get the poster of a selected movie
/movie/upcoming - Get the upcoming movies
/movie/popular - Get the popular movies
/movie/top_rated - Get the top rated movies
/tvseries/home - Main TV hmoe
/tv/${id} - Get the details of a selected TV Show
/tv/popular - Get the Popular TV Series



[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

If the user is not signed and tries to access favourites they will be prompted to sign in or create an account.

## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie (not working)| N/A | N/A
| /api/movies/tmdb/upcoming | Get all upcoming movies | N/A | N/A | N/A
| /api/movies/tmdb/toprated | Get all top rated movies | N/A | N/A | N/A
| /api/movies/tmdb/popular | Get all popular movies | N/A | N/A | N/A
| /api/movies/tmdb/tv | Get all TV Series | N/A | N/A | N/A
| /api/movies/{tv_id}/getTVReviews | Get all reviews for tv series | Create a new review for Movie (Not working) | N/A | N/A
| /api/users?action=register | N/A | Register a new user into the API | N/A | N/A
| /api/users | Query the list of users | N/A | N/A | N/A


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

+ Users are issued a JWT token when they register that is tied to their account
​
## Integrating with React App
​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

+ My react app can be found as an earlier save on this repo under "TV-Image error but API working"




