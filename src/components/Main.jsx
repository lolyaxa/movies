import React, { useState } from 'react';
import styled from '@emotion/styled';
import Movie from './Movie';
import Paginator from './Paginator';
import { useMoviesFetch } from '../hooks/useMoviesFetch.hook';

const PageContainer = styled.div`
  background: #000;
`;

const MoviesContainer = styled.div`
  padding: 20px 15px;
`;

const Main = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, error } = useMoviesFetch(activePage);
  const isLoading = !data && !error;
  return (
    <PageContainer>
      <MoviesContainer>
        {error && <div>Error :(</div>}
        {isLoading && <div style={{ color: 'white' }}>Loading...</div>}
        {data && data.map(item => (
          <Movie
            key={item.id}
            item={item}
          />
        ))}
      </MoviesContainer>
      <Paginator
        total={50}
        perPage={10}
        activePage={activePage}
        onSelect={setActivePage}
      />
    </PageContainer>
  )
};

export default Main;