import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import WatchList from "./Components/WatchList";

import "./App.css";

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("watchCartArr"));

  const [cart, setCart] = useState(cartFromLocalStorage || []);
  // const [show, setShow] = useState(false);
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Routes>
        <Route
          index
          element={
            <>
              <NavBar />

              <Cards cart={cart} setCart={setCart} />
            </>
          }
        />

        <Route
          path="watchlist"
          element={<WatchList cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
