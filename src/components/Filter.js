import React, { Component } from "react";
import {connect} from "react-redux";
import {filterProducts, sortProducts} from "../actions/productActions";

class Filter extends Component {
  render() {
      return !this.props.filteredProducts ? (
      <div>Cargando...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Productos
        </div>
        <div className="filter-sort">
          Orden{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">últimos</option>
            <option value="lowest">mayor Precio</option>
            <option value="highest">menos Precio</option>
          </select>
        </div>
        <div className="filter-size">
          Filtro{" "}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">TODOS</option>
            <option value="LP">LP</option>
            <option value="KCT">KCT</option>
            <option value="45">45</option>
            <option value="CD">CD</option>
          </select>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);
