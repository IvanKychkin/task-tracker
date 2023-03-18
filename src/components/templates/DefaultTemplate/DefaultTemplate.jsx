import React from "react";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import MainContent from "./components/molecules/MainContent";
  
const DefaultTemplate =({ children, color : string = "cornsilk" }) => {
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
