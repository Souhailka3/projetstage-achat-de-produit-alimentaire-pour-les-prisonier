import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import "./Facture.css";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Facture = () => {
  const categoryUnits = {
    1: "uni",
    2: "kG",
    3: "uni",
    4: "l",
    5: "uni",
  };
  const [selectedProducts, setSelectedProducts] = useState([]);
  const idPanier = useParams().id;

  const fetchCart = () => {
    axios
      .get("http://localhost:8080/contenir/getValidCart/" + idPanier)
      .then((response) => {
        setSelectedProducts(response.data);
      });
    console.log("cart", selectedProducts);
  };

  useEffect(() => {
    fetchCart();
  }, []);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${""} ${""} ${""}${currentDate.getHours()}:${currentDate.getMinutes()}`;
  return (
    <div className="container">
      <div className="facture">
        <h2>
          <i class="bi bi-basket"></i>
        </h2>
        <h3>recu d'achat</h3>
        <h4>veuillez payer votre facture</h4>
        <div className="qr">
          {selectedProducts && selectedProducts[0] && (
            <QRCode value={selectedProducts[0].panier.id} size={100} />
          )}
        </div>
        <div className="selectedProducts">
          {selectedProducts &&
            selectedProducts.map((sproduct) => {
              return (
                <div key={sproduct.produit.id}>
                  <span className="text">{sproduct.produit.nomproduit} :</span>

                  <span className="quantity">
                    {sproduct.quantite}{" "}
                    {categoryUnits[sproduct.produit.categorie.id]}
                  </span>

                  <span className="quantity">
                    {sproduct.produit.prix * sproduct.quantite} dh
                  </span>
                </div>
              );
            })}
          {selectedProducts.length > 0 && (
            <h5>prix total : {selectedProducts[0].panier.prixtotal} DH</h5>
          )}
          <div className="date">
            <h5>date :</h5>
            <h5>{formattedDate}</h5>
          </div>
          <p>
            nombre totale de produit:
            {selectedProducts.length}
          </p>
        </div>
      </div>
      <div className="cont">
        <div className="print" onClick={() => window.print()}>
          <img
            src="data:image/png;base64,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"
            className="coin"
          />
          imprimer
        </div>
        <Link to={"/magasin"}>
          <div className="print">
            <img
              src="https://cdn-icons-png.flaticon.com/512/664/664487.png"
              className="coin"
            />
            <p>magasin</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Facture;
