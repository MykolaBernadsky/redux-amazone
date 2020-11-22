import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`;

export const Header = styled.header`
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

export const Main = styled.main`
  grid-area: main;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #203040;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainContent = styled.div`
  flex: 3 60rem;
`;

export const SidebarWrapper = styled.div`
  flex: 1 20rem;
`;