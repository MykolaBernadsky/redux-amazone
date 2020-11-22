import React from "react";
import {
  FilterContainer,
  FilterResult,
  FilterSize,
  FilterSort,
} from "./Filter.styles";

function Filter({ count, size, sort, sortProducts, filterProducts }) {
  return (
    <FilterContainer>
      <FilterResult>{count} Products</FilterResult>
      <FilterSort>
        Order{" "}
        <select value={sort} onChange={sortProducts}>
          <option>Latest</option>
          <option value="Lowest">Lowest </option>
          <option value="Highest">Highest </option>
        </select>{" "}
      </FilterSort>
      <FilterSize>
        Filter{" "}
        <select value={size} onChange={filterProducts}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>{" "}
      </FilterSize>
    </FilterContainer>
  );
}

export default Filter;
