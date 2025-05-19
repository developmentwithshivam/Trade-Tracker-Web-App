import React, { useEffect, useState } from "react";
import Test from "./test";
import Card from "../component/Card/Card";
import { fetchdata } from "../appwrite/Database/database";
import { fetchimage, getpreview } from "../appwrite/Storage/storage";
import { setisupdated } from "../redux/slice/Form/PostFromSlice";
import { useDispatch, useSelector } from "react-redux";
import CardSkeleton from "../component/Skeleton/CardSkeleton";
import Logo from "../component/Logo/Logo";
import { Link } from "react-router-dom";
function Home() {
  const islogin = useSelector((state) => state.login.islogin);
  const [cardDetails, setcardDetails] = useState([]);
  const [cardImage, setcardImage] = useState([]);
  const [Loding, setLoding] = useState(true);
  const isupdated = useSelector((state) => state.postform.isupdated);
  const SkeletonCount = [0, 1, 2, 3, 4, 5, 6, 7];
  let images = [];

  const onMount = async () => {
    const data = await fetchdata();
    setcardDetails(data.documents);

    images = await fetchimage();
    const imagearray = images?.files || [];

    const promisearray = imagearray?.map((items) => {
      const id = String(items.$id);
      return getpreview(id);
    });

    setcardImage(await Promise.all(promisearray));

    setLoding(false);
  };

  useEffect(() => {
    if(islogin){
      onMount();
    }
  }, [isupdated]);

  
  return islogin ? (
    <>
      {
        <div className="flex justify-center overflow-x-hidden py-10 relative z-0">
          <button
            className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-purple-800 text-white text-4xl flex justify-center items-center shadow-md hover:bg-purple-700 transition-all duration-200 z-50"
          >
            +
          </button>

          {Loding ? (
            <div className="flex flex-wrap justify-around w-full">
              {SkeletonCount?.map((items) => {
                return (
                  <div key={items}>
                    <CardSkeleton />
                  </div>
                );
              })}
            </div>
          ) : (
           <div>
            <div className="flex flex-wrap justify-around w-full">
              {cardDetails?.map((items, index) => {
                return (
                  <div key={items.$id}>
                    <Card
                      index={index}
                      cardImage={cardImage}
                      date={items.Date}
                      pairName={items.Pair}
                      notes={items.Notes}
                    />
                  </div>
                );
              })}
            </div>
           </div>
          )}
        </div>
      }

      {/*   
      <h1>Home</h1>
      <Test /> */}
    </>
  ) : (
    <>
      {/* {" "}
      <div className="w-full h-[43rem]  bg-[url('/Images/LaptopBackgroun.jpeg')] bg-cover bg-top-left  overflow-hidden flex justify-center items-center">
        <div className="w-screen h-[20rem] md:h-[20rem] flex flex-col justify-evenly items-center">
          <div className=" flex justify-center mb-3 w-full text-3xl text-center md:text-5xl  font-bold  text-white">
            <div className=" p-3  ">
              <Logo textcolor={"text-white"} textsize={"text-3xl"} />
            </div>
          </div>
          <div className="text-white max-w-[36rem] h-28 text-center text-lg">
            Take the BullRush trading trivia challenge today. This exciting
            trading trivia quiz gives traders the opportunity to test their
            trading trivia knowledge. Are you an FX Titan or a Trading Rookie?
            Test your trading knowledge!
          </div>
          <div className="bg-red-600 w-[23rem] h-16 flex justify-center items-center mt-9 md:mt-6 text-base rounded-md text-white">
            Test your trading knowledge with this fun trivia!
          </div>
        </div>
      </div> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-20 to-white flex flex-col items-center justify-center px-6 mt-14 md:mt-0 select-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            TradeTracker
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Track your trades effortlessly, analyze performance, and grow as a
            smarter trader with TradeTracker — your personal trading journal.
          </p>
        </header>

        {/* Hero Illustration or Stats Section */}
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Record. Reflect. Improve.
            </h2>
            <p className="text-gray-600">
              Log every trade with details, monitor your progress with powerful
              analytics, and never miss an opportunity to grow.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/signup">
                <button className="px-6 py-3 bg-purple-800 hover:bg-purple-900 text-white font-semibold rounded-xl shadow cursor-pointer">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-3 bg-white border border-purple-800 text-purple-900 hover:bg-purple-50 font-semibold rounded-xl shadow cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>

          {/* Placeholder for illustration or stats */}
          <div className="md:w-1/2">
            <img
              src="images\Herosection.png"
              alt="Trading Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
