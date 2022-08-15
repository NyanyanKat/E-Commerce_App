import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../components/CheckoutProduct.js";
import Subtotal from "../components/Subtotal.js";
import { useStateValue } from "../context/StateProvider.js";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349778_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h3>
            Hello,{" "}
            {user
              ? `${
                  user.email.split("@")[0].charAt(0).toUpperCase() +
                  user.email.split("@")[0].slice(1)
                }`
              : "Guest"}
          </h3>
          {/* <h3>
            Hello,{" "}
            {user ? `${user.email.slice(0, user.email.indexOf("@"))}` : "Guest"}
          </h3> */}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* <CheckoutProduct
            id="112342"
            title="test, aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaa"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={199.99}
            rating={3}
          />

          <CheckoutProduct
            id="112344"
            title="test2, bbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbb"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={12.99}
            rating={5}
          />

          <CheckoutProduct
            id="112345"
            title="test3"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={1.99}
            rating={1}
          /> */}
          {/* <FlipMove> */}
            {basket?.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={index}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
