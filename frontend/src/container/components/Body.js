import React, { useEffect } from "react";

import "./Body.css";

const Body = ({
  products,
  selectedCategory,
  handleProductClick,
  selectedProducts,
  handleRemove,
  handleDecrement,
  handleIncrement,
  setSelectedProducts,
}) => {
  const categoryUnits = {
    1: "uni",
    2: "kG",
    3: "uni",
    4: "l",
    5: "uni",
  };
  return (
    <div className="products-container">
      <div className="products">
        {products
          .filter((product) => {
            return (
              !selectedCategory || product.categorie.id === selectedCategory.id
            );
          })
          .map((product) => (
            <div
              key={product.id}
              onClick={() => {
                console.log("aaaaa", product);
                handleProductClick(product);
                console.log(product);
              }}
            >
              <img src={product.img} alt="" />
              <p>{product.nomproduit}</p> <p>{product.prix}dh</p>
            </div>
          ))}
      </div>
      <div className="selected-product">
        {selectedProducts &&
          selectedProducts.map((sproduct) => {
            return (
              <div key={sproduct.produit.id}>
                <span className="text">{sproduct.produit.nomproduit} :</span>
                <button
                  className="btn btn-primary moins"
                  onClick={() => handleDecrement(sproduct.produit)}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="quantity">
                  {sproduct.quantite}{" "}
                  {categoryUnits[sproduct.produit.categorie.id]}
                </span>
                <button
                  className="btn btn-primary plus"
                  onClick={() => handleIncrement(sproduct.produit)}
                >
                  <i className="bi bi-plus"></i>
                </button>
                <span className="quantity">{sproduct.produit.prix} dh</span>
                <button
                  className="btn btn-primary remove"
                  onClick={() => handleRemove(sproduct.produit)}
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
