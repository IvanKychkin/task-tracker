import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

const DefaultTemplate = ({ children, Name }) => {
  return (
    <>
      <Header pageName={Name} />
      {children}
      <Footer />
    </>
  );
};

export default DefaultTemplate;
