import React from "react";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import MainContent from "../../molecules/MainContent/MainContent";

const DefaultTemplate = ({ children, color: string = "black" }) => {
  const onClick = () => {
    console.log("hi!");
  };
  return (
    <>
      <Header />
      <MainContent color={color}>{children}</MainContent>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
