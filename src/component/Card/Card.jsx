import React, { useState } from "react";

function TradeCard({ index, cardImage, date, pairName, notes }) {
  return (
    <>
      <div className="my-5 mr-5 w-80 rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
        {/* Image */}
        {cardImage[index]?.href && (
          <div key={index} className="overflow-hidden">
            <img
              src={cardImage[index]?.href}
              alt={"pairName"}
              className="h-52 w-full object-fill rounded-t-3xl hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          {/* Pair Name Badge */}
          <div className="inline-block bg-purple-200 text-purple-700 font-bold text-xs px-3 py-1 rounded-full w-fit">
            {pairName}
          </div>

          {/* Date */}
          <p className="text-gray-500 text-sm">
            {new Date(date).toLocaleDateString()}
          </p>

          {/* Notes */}
          <p className="text-gray-700 text-base leading-relaxed font-medium">
            {notes}
          </p>
        </div>
      </div>

      
    </>
  );
}

export default React.memo(TradeCard);
