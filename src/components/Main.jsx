  
import React, { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';

const Main = () => {
  const [response, setResponse] = useState();
  const [isError, setIsError] = useState(false);
  const isLoading = response === undefined;
  useEffect(() => {
    async function f() {
      const url = 'https://yts.mx/api/v2/list_movies.json?limit=50&with_images=true&with_cast=true';
      let responses = await fetch(url);
      let commits = await responses.json();
      if (commits.status === 'ok') {
        setResponse(commits.data.movies);
      } else {
        setIsError(true);
      }
    }
    f();
  }, []);
  if (isError) {
    return <div>Произошла ошибка :(</div>;
  }
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div>
      popo
    </div>
  )
};

export default Main;