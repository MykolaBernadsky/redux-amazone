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
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter((product) => {
          return product.availableSizes.indexOf(event.target.value) >= 0;
        })
      );
    }
  };

  const sortProducts = (event) => {
    setSort(event.target.value);

    switch (event.target.value) {
      case "Lowest":
        setProducts(products.slice().sort((a, b) => a.price - b.price));
        break;
      case "Highest":
        setProducts(products.slice().sort((a, b) => b.price - a.price));
        break;
      default:
        setProducts(products.slice().sort((a, b) => (b._id < a._id ? 1 : -1)));
    }
  };

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
              <Filter
                count={products.length}
                size={size}
                sort={sort}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
              <ProductList products={products} />
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
