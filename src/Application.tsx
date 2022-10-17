import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/List";
import HomePage from "./pages/Home";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about">
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
