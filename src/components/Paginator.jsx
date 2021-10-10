import React from 'react';
import styled from '@emotion/styled';

const Page = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  padding: 6px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: ${(props) => props.active ? 'rgba(186, 204, 201, 0.904);' : 'none'};
`;

const Pages = styled.div`
  text-align: center;
`;

const PageButton = ({ pageNumber, onClick, active }) => (
  <Page
    active={active}
    onClick={() => onClick(pageNumber)}
  >
    {pageNumber}
  </Page>
);

function Paginator(props) {
  const { total, perPage, onSelect, activePage } = props;
  const pagesOfRepos = [];
  let i = 1;
  while ((i * perPage) <= total) {
    pagesOfRepos.push(
    <PageButton
      key={i}
      onClick={(pageNumber) => {
        onSelect(pageNumber);
      }}
      pageNumber={i}
      active={ i === activePage }
    />);
    i += 1;
  }
  return <Pages>{pagesOfRepos}</Pages>
}

export default Paginator;