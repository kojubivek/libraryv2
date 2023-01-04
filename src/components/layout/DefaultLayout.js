import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <Container className="Container"> {children}</Container>

      <Footer />
    </div>
  );
};
