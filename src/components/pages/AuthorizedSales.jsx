import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const AuthorizedSales = () => {
  return (
    <div>
      <Container>
        <div className="text-center"> 
          <TitleHeader headerText="Induss" />
          <TitleHeader headerText="Mexthrem" />
          <TitleHeader headerText="Qili" />
        </div>
      </Container>
    </div>
  );
};

export default AuthorizedSales;
