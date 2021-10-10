import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Movie from './Movie';
import Paginator from './Paginator';

const PageContainer = styled.div`
  background: #000;
`;

const MoviesContainer = styled.div`
  padding: 20px 15px;
`;

const Main = () => {
  const [response, setResponse] = useState();
  const [isError, setIsError] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const isLoading = response === undefined;
  useEffect(() => {
    if (!response) {
      async function f() {
        const url = 'https://yts.mx/api/v2/list_movies.json?limit=50&with_images=true&with_cast=true';
        let responses = await fetch(url);
        let commits = await responses.json();
        if (commits.status === 'ok') {
          setResponse(commits.data.movies);
          console.log(commits.data.movies);
        } else {
          setIsError(true);
        }
      }
      f();
    }
  }, [response]);
  if (isError) {
    return <div>Произошла ошибка :(</div>;
  }
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  const movies = response.slice((activePage - 1) * 10, activePage * 10 - 1);
  return (
    <PageContainer>
      <MoviesContainer>
        {movies.map(item => (
          <Movie
            key={item.id}
            item={item}
          />
        ))}
      </MoviesContainer>
      <Paginator
        total={response.length}
        perPage={10}
        activePage={activePage}
        onSelect={(pageNumber) => {
          setActivePage(pageNumber);
        }}
      />
    </PageContainer>
  )
};

export default Main;