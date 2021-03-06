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
const Paginator = ({ total, perPage, onSelect, activePage }) => {
  const pages = Array.from({ length: Math.ceil(total / perPage)}, (_, i) => i + 1)
  return (
    <Pages>
      {pages.map((page) => (
        <PageButton
           key={page}
           pageNumber={page}
           active={page === activePage}
           onClick={onSelect}
        />
      ))}
    </Pages>
  )
}

export default Paginator;