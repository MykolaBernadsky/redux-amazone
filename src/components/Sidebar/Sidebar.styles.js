import styled from 'styled-components';

export const Cart = styled.div`
  padding: 1rem;
  margin: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  border-bottom: .1rem #c0c0c0 solid;

`;

export const CartItems = styled.ul`
  padding: 0;
  width: 100%;
  list-style-type: none;

  img {
    width: 5rem;
  }

  li {
    display: flex;

    div {
      padding: .2rem;
      &:last-child {
        flex: 1;
      }
    }
  }
`;