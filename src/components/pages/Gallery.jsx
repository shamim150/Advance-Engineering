import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const Gallery = () => {
  return (
    <div>
      <Container>
        <div>
          <TitleHeader headerText="Show All " />
          <div className="flex gap-10 items-center justify-center">
            <img className="w-[400px]" src="/Gallery/Rice -Mill.jpg" alt="" />
            <img className="w-[400px]" src="/Gallery/Rice -Mill.jpg" alt="" />
            <img className="w-[400px]" src="/Gallery/Rice -Mill.jpg" alt="" />
            <img className="w-[400px]" src="/Gallery/Rice -Mill.jpg" alt="" />
          </div>
        </div>
        <div>
          <TitleHeader headerText="Exhibition" />
          <div className="flex items-center justify-center">
            <img src="/Gallery/Rice -Mill.jpg" alt="" />
          </div>
        </div>
        <div>
          <TitleHeader headerText="Awards" />
          <div className="flex items-center justify-center">
            <img src="/Gallery/Rice -Mill.jpg" alt="" />
          </div>
        </div>
        <div>
          <TitleHeader headerText="Certificate" />
          <div className="flex items-center justify-center">
            <img src="/Gallery/Rice -Mill.jpg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
