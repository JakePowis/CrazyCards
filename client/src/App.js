import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MainScreen from "./screens/MainScreen";
import CardScreen from "./screens/CardScreen";

function App() {
  const [toggleView, setToggleView] = useState("welcome");

  return (
    <BrowserRouter>
      <div className="app">
        <Header setToggleView={setToggleView} />
        <Sidebar setToggleView={setToggleView} />

        <Route
          path="/"
          exact={true}
          render={(props) => (
            <MainScreen
              {...props}
              toggleView={toggleView}
              setToggleView={setToggleView}
            />
          )}
        />
        <Route path="/card/:_id" component={CardScreen} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
