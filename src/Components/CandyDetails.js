// CandyDetails.js
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../store/cart-context";

const CandyDetails = ({ refresh }) => {
  const { addItem } = useContext(CartContext);
  const [candyDetails, setCandyDetails] = useState([]);

  useEffect(() => {
    const fetchCandyDetails = async () => {
      try {
        const response = await fetch(
          "https://candyshop-c3e78-default-rtdb.firebaseio.com/candydetails.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch candy details");
        }
        const data = await response.json();
        const candyArray = [];
        for (const key in data) {
          const candy = {
            id: key,
            ...data[key],
          };
          candyArray.push(candy);
        }
        setCandyDetails(candyArray);
      } catch (error) {
        console.error("Error fetching candy details:", error.message);
      }
    };
    fetchCandyDetails();
  }, [refresh]);

  const handleBuy = (id, name, price, quantity) => {
    const item = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    };
    addItem(item);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Candy Details</h3>
      {candyDetails.map((candy) => (
        <div
          key={candy.id}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p style={{ margin: "5px" }}>{candy.candyname}</p>
          <p style={{ margin: "5px" }}>{candy.candydesc}</p>
          <p style={{ margin: "5px" }}>{candy.candyprice}</p>
          <button
            style={{ margin: "5px" }}
            onClick={() => handleBuy(candy.id, candy.candyname, candy.candyprice, 1)}
          >
            Buy1
          </button>
          <button
            style={{ margin: "5px" }}
            onClick={() => handleBuy(candy.id, candy.candyname, candy.candyprice, 2)}
          >
            Buy2
          </button>
          <button
            style={{ margin: "5px" }}
            onClick={() => handleBuy(candy.id, candy.candyname, candy.candyprice, 3)}
          >
            Buy3
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandyDetails;
