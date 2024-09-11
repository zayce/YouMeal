import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./AllComponents/Header/Header";
import { Home } from "./Pages/Home";

import "./App.scss";

export const App = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};
