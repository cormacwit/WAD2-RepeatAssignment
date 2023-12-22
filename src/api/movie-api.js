export const login = async (username, password) => {
    const res = await fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return await res.json();
};

export const signup = async (username, password) => {
    const res = await fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return await res.json();
};

export const getMovies = () => {
  return fetch(
      '/api/movies', {
      headers: {
          'Authorization': window.localStorage.getItem('token')
      }
  }
  ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
      '/api/movies/tmdb/upcoming', {
      headers: {
          'Authorization': window.localStorage.getItem('token')
      }
  }
  ).then(res => res.json());
};

export const getTopRatedMovies = () => {
  return fetch(
      '/api/movies/tmdb/toprated', {
      headers: {
          'Authorization': window.localStorage.getItem('token')
      }
  }
  ).then(res => res.json());
};

export const getTVSeries = () => {
  return fetch(
      '/api/movies/tmdb/tv', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
  }
  ).then(res => res.json());
};

export const getPopularMovies = () => {
    return fetch(
        '/api/movies/tmdb/Popular', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
  };