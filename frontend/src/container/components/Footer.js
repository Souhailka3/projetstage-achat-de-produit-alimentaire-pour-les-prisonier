import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = ({ idPanier, totalPrice }) => {
  const [condition, setCondition] = React.useState(false);
  const handleConfirmCart = (totalPrice) => {
    axios.post("http://localhost:8080/panier/order/" + totalPrice).then();
  };
  return (
    <div className="footer-contaier">
      <div className="empty"></div>
      <div className="total-container">
        <div className="total">Prix Total:</div>
        <div className="Total-price">{totalPrice} dh</div>
        <div className="comfirmer">
          <button
            className="btn  btn-primary"
            onClick={() => handleConfirmCart(totalPrice)}
            disabled={totalPrice === 0}
          >
            <Link to={"/facture/" + idPanier}>
              <span className="comf">confirmer</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
