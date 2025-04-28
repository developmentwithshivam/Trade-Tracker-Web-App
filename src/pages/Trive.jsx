import React from "react";

function Trive() {
  return (
    <>
    

      <div className="w-full h-[43rem]  bg-[url('src/Logo/LaptopBackgroun.jpeg')] bg-cover bg-top-left  overflow-hidden flex justify-center items-center">
        <div className="w-screen h-[20rem] md:h-[20rem] flex flex-col justify-evenly items-center">
          <div className=" flex justify-center mb-3 w-full text-3xl text-center md:text-5xl  font-bold  text-white">
            <div className=" p-3  ">BullRush Trading Trivia</div>
          </div>
          <div className="text-white max-w-[36rem] h-28 text-center text-lg">
            
              Take the BullRush trading trivia challenge today. This exciting
              trading
            
            
              trivia quiz gives traders the opportunity to test their trading
              trivia
            
            
              knowledge. Are you an FX Titan or a Trading Rookie? Test your
              trading
            
            knowledge!
          </div>
            <div className="bg-red-600 w-[23rem] h-16 flex justify-center items-center mt-9 md:mt-6 text-base rounded-md text-white">Test your trading knowledge with this fun trivia!</div>
        </div>
          {/* <div className="w-44 h-44 bg-yellow-400 pb-96"></div> */}
      </div>
    
    </>
  );
}

export default Trive;