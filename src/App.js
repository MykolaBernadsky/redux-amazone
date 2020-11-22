import styled from "styled-components";
import { GlobalStyles } from "./globalStyles";

const MainContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`;

const Header = styled.header`
  grid-area: header;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: .5rem;
  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #ff8000;
  }
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header>
          <a href="/">Shopping Cart</a>
        </Header>
        <Main>Product list</Main>
        <Footer>all rights is reserved</Footer>
      </MainContainer>
    </>
  );
}

export default App;
