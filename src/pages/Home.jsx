import React, { useEffect, useState } from "react";
import Test from "./test";
import Card from "../component/Card/Card";
import { fetchdata } from "../appwrite/Database/database";
import { fetchimage, getpreview } from "../appwrite/Storage/storage";
import { setisupdated } from "../redux/slice/Form/PostFromSlice";
import { useDispatch, useSelector } from "react-redux";
import CardSkeleton from "../component/Skeleton/CardSkeleton";

function Home() {
  const islogin = useSelector((state) => state.login.islogin);
  const [cardDetails, setcardDetails] = useState([]);
  const [cardImage, setcardImage] = useState([]);
  const [Loding, setLoding] = useState(true);
  const isupdated = useSelector((state) => state.postform.isupdated);
  const SkeletonCount = [0,1,2,3,4,5,6,7];
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
    onMount();
  }, []);

  useEffect(() => {
    onMount();
  }, [isupdated]);

  return (
    <>
      {islogin && (
        <div className="flex justify-center overflow-x-hidden px-10 py-10 min-h-screen">
          {Loding ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
              {SkeletonCount?.map((items) => {
                return <div key={items.$id}><CardSkeleton /></div>;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
              {cardDetails?.map((items, index) => {
                return (
                  <div
                    key={items.$id}
                    >
                    <Card
                      index={index}
                      cardImage={cardImage}
                      date={items.Date}
                      pairName={items.Pair}
                      notes={items.Notes}
                    />
                  </div>
                );
                })
              }
            </div>
          )}
        </div>
      )}

      {/*   
      <h1>Home</h1>
      <Test /> */}
    </>
  );
}

export default Home;
