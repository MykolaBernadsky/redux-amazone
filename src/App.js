import React, { useState } from "react";
import data from "./data.json";
import { GlobalStyles } from "./globalStyles";
import {
  MainContainer,
  MainWrapper,
  MainContent,
  SidebarWrapper,
  Header,
  Main,
  Footer,
} from "./App.styles";

//components
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header>
          <a href="/">Shopping Cart</a>
        </Header>
        <Main>
          <MainWrapper>
            <MainContent>
              <ProductList products={data.products} />
            </MainContent>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </MainWrapper>
        </Main>
        <Footer>all rights is reserved</Footer>
      </MainContainer>
    </>
  );
}

export default App;
