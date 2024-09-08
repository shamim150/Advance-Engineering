import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Products = () => {
  return (
    <div>
      <Container>
        <div>
          <TitleHeader
            className="text-center"
            headerText="Dryers and Parboiling"
          />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            recusandae eum asperiores rem, mollitia tempora corrupti voluptas
            animi nemo est beatae tempore distinctio culpa voluptatum temporibus
            voluptate alias nulla, delectus corporis ratione ipsam voluptates
            magnam quibusdam doloribus. Rem, aperiam recusandae illo tempora
            velit odio alias saepe esse non aliquid amet.
          </p>
          <div className="image flex justify-center items-center ">
            <img src="/Products/Dryers and Parboiling.webp" alt="" />
          </div>
        </div>
        <div>
          <TitleHeader className="text-center" headerText="Boiler" />
          <p className="text-center">
            boiler, apparatus designed to convert a liquid to vapour. In a
            conventional steam power plant, a boiler consists of a furnace in
            which fuel is burned, surfaces to transmit heat from the combustion
            products to the water, and a space where steam can form and collect.
          </p>
          <div className="image flex justify-center items-center mt-4">
            <img src="/Products/boiler.webp" alt="" />
          </div>
        </div>

        <TitleHeader headerText="Continuous Cooker" />
        <TitleHeader headerText="Furnace" />
        <TitleHeader headerText="Floor Machinery" />
        <TitleHeader headerText="Oil Mill Machinery with Refine System" />
        <TitleHeader headerText="Rice Mill Machinery" />
        <TitleHeader headerText="Colour Sorter" />
        <TitleHeader headerText="Paddy Cleaner" />
        <TitleHeader headerText="Feed Mill Machinery" />
        <TitleHeader headerText="Grain Silo" />
      </Container>
    </div>
  );
};

export default Products;
