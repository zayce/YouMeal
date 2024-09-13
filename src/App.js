import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./AllComponents/Header/Header";
import { Home } from "./Pages/Home";

import "./App.scss";
import { MyProvider } from "./UseContext";

export const App = () => {
  return (
    <>
      <>
        <MyProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </>
    </>
  );
};
