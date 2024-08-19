import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const OurClients = () => {
  return (

    <Container>
      <TitleHeader className="text-center" headerText="Our Clients" />

      <div className="flex justify-between my-10 ">

          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500  bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">MGI</h2>

          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500 bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">Akij</h2>
          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500 bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">TK</h2>
          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500 bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">Nabil</h2>
          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500 bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">SB</h2>
          <h2 className=" w-[150px] py-4 text-center  transition-all duration-500 bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">Desh Bondho</h2>
          <h2 className=" w-[150px] py-4 text-center  bg-gradient-to-l from-indigo-800	 hover:bg-red-400 ">Edrish Group</h2>
     
    

      </div>
    </Container>
  );
};


export default OurClients;
