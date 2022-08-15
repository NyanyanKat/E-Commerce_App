import "./App.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Checkout from "./pages/Checkout.js";
import Login from "./pages/Login.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Orders from "./pages/Orders";
import Prime from "./pages/Prime";
import { ContentNotFound } from "./components/ContentNotFound.js";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./context/StateProvider.js";
import Payment from "./components/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LWudDJwsCHgZrktSKJ9zGed3cDj16A0SPdlmb3mZVTv1ssailDyx6cS2jbRqKEC6eZ3xH9MuD9d111pCmd5SjHi00IVm9zQ7U"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user: ", authUser);
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          {/* <Route
            path="/prime"
            element={
              <>
                <Header />
                <Prime />
              </>
            }
          /> */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="*" element={<ContentNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
