import React from 'react';
import styled from '@emotion/styled';
import Comments from './Comments';

const MovieContainer = styled.div`
  background-image: url(${(props) => props.img});
  padding: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  border-radius: 5px;
  text-align: center;
  color:#fff;
  text-shadow: 1px 1px 1px #000;
`;

const Cover = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.div`
  padding: 15px;
`;

const Subtitle = styled.div`
  padding: 20px 15px;
`;

const Description = styled.div`
  padding: 10px 15px;
`;

const formatMinutes = (m) =>
  [[Math.floor(m / 60), 'h'], [m % 60, 'min']]
    .map(([number, string]) => (number === 0 ? '' : number.toString() + string))
    .join(' ')
    .trim();

const Movie = ({ item }) => {
  const genres = item.genres ? '• ' + item.genres.join(', ') : '';
  const duration = item.runtime ? '• ' + formatMinutes(item.runtime) : '';
  return (
    <div>
      <MovieContainer img={item.background_image}>
        <Cover>
          <img src={item.small_cover_image} alt='cover' />
        </Cover>
        <Header>
          <Title>
            {item.title_long}
          </Title>
          <Subtitle>
            Rating {item.rating} {duration} {genres}
          </Subtitle>
        </Header>
        <Description>
          {item.description_full}
        </Description>
      </MovieContainer>
      <Comments />
    </div>
  )
};

export default Movie;