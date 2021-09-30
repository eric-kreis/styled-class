import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderS = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  h1 {
    margin: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MainS = styled.main`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: auto;

  button {
    background-color: black;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: gray;
    }
  }
`;

export const ItemS = styled.li`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ListS = styled.ul`
  background-color: green;
`;

export const MyLinkS = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: blue;
    text-decoration: underline;
  }
`;
