import { useQuery } from 'react-query';

export const useMoviesFetch = (page) =>
  useQuery(`movies/${page}`, () => {
    return fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=10&with_images=true&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => res.data.movies)
  }, {
    refetchOnMount: false,
  })