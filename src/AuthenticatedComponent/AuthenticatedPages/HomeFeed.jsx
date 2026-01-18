import { fetchdata } from "@/appwrite/Database/database";
import { fetchimage, getpreview } from "@/appwrite/Storage/storage";
import Card from "@/component/Card/Card";
import CardSkeleton from "@/component/Skeleton/CardSkeleton";
import { useQuery } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import RightsidehomeFeed from "../RightsidehomeFeed";
import Searchbar from "../Searchbar";
function HomeFeed() {
  const [imagepreview, setimagepreview] = useState([]);
  const SkeletonCount = [0, 1];
  const {
    isPending: isDataLoding,
    isError: isDataError,
    data: postData,
    error: postError,
  } = useQuery({
    queryKey: ["getAllPostData"],
    queryFn: fetchdata,
    refetchOnWindowFocus: false,
  });

  const {
    isPending: isImageDataLoding,
    isError: isImageDataError,
    data: postImageData,
    error: postImageError,
  } = useQuery({
    queryKey: ["getAllPostImage"],
    queryFn: fetchimage,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const filesarr = postImageData?.files || [];
    const promisearray = filesarr.map((file) => getpreview(file.$id));
    // console.log(promisearray);
    if (postImageData && postImageData?.files) {
      (async () => {
        setimagepreview(await Promise.all(promisearray));
      })();
    }
    // getfilefromdata(postImageData);
  }, [postImageData]);

  return (
    <>
      <Searchbar />
      <div className="bg-gray-50 lg:flex">
        <div
          className={`no-scrollbar flex h-[92dvh] w-full justify-center pt-20 md:h-screen lg:w-4/6 ${imagepreview.length > 0 ? "overflow-y-auto" : "overflow-hidden"} `}
        >
          {isImageDataLoding ? (
            <div className="flex w-full flex-col gap-5 md:w-lg">
              {SkeletonCount?.map((items) => {
                return <CardSkeleton key={items} />;
              })}
            </div>
          ) : (
            <div>
              <div className="flex w-full flex-col space-y-5">
                {postData?.documents?.map((items, index) => {
                  return (
                    <div key={items.$id}>
                      <Card
                        index={index}
                        cardImage={imagepreview}
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
        <RightsidehomeFeed />
      </div>
    </>
  );
}

export default HomeFeed;
