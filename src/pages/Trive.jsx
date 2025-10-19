import React from "react";

function Trive() {
  return (
    <>
      <div className="bg-top-left flex h-[43rem] w-full items-center justify-center text-black">
        <div className="flex h-[20rem] w-screen flex-col items-center justify-evenly md:h-[20rem]">
          <div className="mb-3 flex w-full justify-center text-center text-3xl font-bold md:text-5xl">
            <div className="p-3">BullRush Trading Trivia</div>
          </div>
          <div className="h-28 max-w-[36rem] text-center text-lg">
            Take the BullRush trading trivia challenge today. This exciting
            trading trivia quiz gives traders the opportunity to test their
            trading trivia knowledge. Are you an FX Titan or a Trading Rookie?
            Test your trading knowledge!
          </div>
          <div className="mt-9 flex h-16 w-[23rem] items-center justify-center rounded-md bg-red-600 text-base md:mt-6">
            Test your trading knowledge with this fun trivia!
          </div>
        </div>
        {/* <div className="w-44 h-44 bg-yellow-400 pb-96"></div> */}
      </div>
    </>
  );
}

export default Trive;
