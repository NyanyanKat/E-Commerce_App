import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
