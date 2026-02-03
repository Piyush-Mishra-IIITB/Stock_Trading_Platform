import React, { useState, useContext } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same styling

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const { closeSellWindow } = useContext(GeneralContext);

 const handleSellClick = async () => {
  try {
    await api.post("/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "SELL",
    });

    closeSellWindow();
  } catch (err) {
    alert(err.response?.data?.error || "Sell failed");
  }
};

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>

        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>

        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={closeSellWindow}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
