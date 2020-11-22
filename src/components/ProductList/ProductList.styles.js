import styled from 'styled-components';

export const ListOfProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  li {
    display:flex;
    flex-direction: column;
    height: 47rem;
    padding: 1rem;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  img {
    max-width: 37rem;
    max-height: 37rem;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div, button {
    text-align: center;
    flex: 1;
  }

  div {
    font-size: 2rem;
  }

  button {
    padding: 1rem;
    border: .1rem #c0c0c0 solid;
    background: #ffc000;
    color: #000000;
    cursor: pointer;
  }

  button:hover {
    border: .1rem #808080 solid;

  }
`;