import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import MainContent from "../../molecules/MainContent/MainContent";

const DefaultTemplate = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default DefaultTemplate;
