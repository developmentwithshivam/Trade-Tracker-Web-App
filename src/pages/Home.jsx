import React, { useEffect, useState } from "react";
import { fetchdata } from "../appwrite/Database/database";
import { fetchimage, getpreview } from "../appwrite/Storage/storage";
import { useDispatch, useSelector } from "react-redux";
// import CardSkeleton from "../component/Skeleton/CardSkeleton";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
function Home() {
  const islogin = useSelector((state) => state.login.islogin);
  const isupdated = useSelector((state) => state.postform.isupdated);
  let images = [];

  // const {
  //   isPending: loding,
  //   isError,
  //   data,
  //   error,
  // } = useQuery({
  //   queryKey: ["getData"],
  //   queryFn: fetchdata,
  //   refetchOnWindowFocus: false,
  // });

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
    if (islogin) {
      onMount();
    }
  }, [isupdated, islogin]);

  return islogin ? (
    <>{/* <Feed /> */}</>
  ) : (
    <>
      <div className="from-gray-20 mt-14 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br to-white px-6 select-none md:mt-0">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl">
            TradeTracker
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            Track your trades effortlessly, analyze performance, and grow as a
            smarter trader with TradeTracker — your personal trading journal.
          </p>
        </motion.div>

        {/* Hero Illustration or Stats Section */}
        <div className="mb-16 flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <motion.div
            animate={{ x: [0, 110, 90, 100], transition: { duration: 0.5 } }}
            className="text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Record. Reflect. Improve.
            </h2>
            <p className="text-gray-600">
              Log every trade with details, monitor your progress with powerful
              analytics, and never miss an opportunity to grow.
            </p>
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <Link to="/signup">
                <button className="cursor-pointer rounded-xl bg-purple-800 px-6 py-3 font-semibold text-white shadow hover:bg-purple-900">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="cursor-pointer rounded-xl border border-purple-800 bg-white px-6 py-3 font-semibold text-purple-900 shadow hover:bg-purple-50">
                  Login
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Placeholder for illustration or stats */}
          <motion.div
            animate={{ x: [200, 100], transition: { duration: 0.2 } }}
            className="md:w-1/2"
          >
            <img
              src="images\Herosection.png"
              alt="Trading Illustration"
              className="mx-auto w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
