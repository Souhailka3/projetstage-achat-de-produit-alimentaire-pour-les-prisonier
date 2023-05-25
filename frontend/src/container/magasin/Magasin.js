import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Body from "../components/Body";
import "./Magasin.css";
import Footer from "../components/Footer";
import Facture from "../components/Facture";

const Magasin = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/categorie/all").then((response) => {
      setCategories(response.data);
      const defaultCategory = response.data.find(
        (category) => category.id === 1
      );
      setSelectedCategory(defaultCategory);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/produit/all").then((response) => {
      setProducts(response.data);
    });
    console.log("products", products);
  }, []);

  const fetchCart = () => {
    axios
      .get("http://localhost:8080/contenir/getPendingCart")
      .then((response) => {
        setSelectedProducts(response.data);
      });
    //console.log("cart", selectedProducts);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotalPice = () => {
    let totalPrice = 0;
    selectedProducts &&
      selectedProducts.map((sproduct) => {
        console.log("sproduct", sproduct);
        const subtotal = sproduct.produit.prix * sproduct.quantite;
        totalPrice += subtotal;
      });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    calculateTotalPice();
    console.log("totalPrice", totalPrice);
  }, [selectedProducts]);

  const handleProductClick = (product) => {
    axios
      .post("http://localhost:8080/contenir/add/save", {
        categorie: product.categorie,
        id: product.id,
        nomproduit: product.nomproduit,
        prix: product.prix,
        contenir: [],
      })
      .then(() => {
        fetchCart();
      });
  };

  const handleIncrement = (product) => {
    axios
      .post("http://localhost:8080/contenir/add/save", {
        categorie: product.categorie,
        id: product.id,
        nomproduit: product.nomproduit,
        prix: product.prix,
        contenir: [],
      })
      .then(() => {
        fetchCart();
      });
  };

  const handleDecrement = (product) => {
    axios
      .post("http://localhost:8080/contenir/substract/save", {
        categorie: product.categorie,
        id: product.id,
        nomproduit: product.nomproduit,
        prix: product.prix,
        contenir: [],
      })
      .then(() => {
        fetchCart();
      });
  };

  const handleRemove = (product) => {
    axios
      .delete("http://localhost:8080/contenir/deleteProductCart/" + product.id)
      .then(() => {
        fetchCart();
      });
  };
  <Facture totalPrice={totalPrice} />;
  return (
    <div className="magasin">
      {/* <Functionlogin /> */}

      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Body
        products={products}
        handleProductClick={handleProductClick}
        selectedCategory={selectedCategory}
        selectedProducts={selectedProducts}
        handleRemove={handleRemove}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        setSelectedProducts={setSelectedProducts}
      />
      <Footer
        idPanier={
          selectedProducts.length > 0 ? selectedProducts[0].panier.id : -1
        }
        totalPrice={totalPrice}
      />
      {console.log("selectedProducts", selectedProducts)}
    </div>
  );
};

export default Magasin;
