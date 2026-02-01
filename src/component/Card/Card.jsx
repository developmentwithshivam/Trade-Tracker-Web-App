// import React, { useState } from "react";

// function TradeCard({ index, cardImage, date, pairName, notes }) {
//   return (
//     <>
//       <div className="my-20 mr-5 w-96 cursor-pointer overflow-hidden rounded-3xl shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
//         {/* Image */}
//         {cardImage[index]?.href && (
//           <div key={index} className="overflow-hidden">
//             <img
//               src={cardImage[index]?.href}
//               alt={"pairName"}
//               className="h-52 w-full rounded-t-3xl object-fill transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//         )}
//         {/* Content */}
//         <div className="flex flex-col gap-3 p-5">
//           {/* Pair Name Badge */}
//           <div className="inline-block w-fit rounded-full bg-purple-200 px-3 py-1 text-xs font-bold text-purple-700">
//             {pairName}
//           </div>

//           {/* Date */}
//           <p className="text-sm text-gray-500">
//             {new Date(date).toLocaleDateString()}
//           </p>

//           {/* Notes */}
//           <p className="text-base leading-relaxed font-medium text-gray-700">
//             {notes}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default React.memo(TradeCard);
import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { PostDropdown } from "@/AuthenticatedComponent/PostDropdown";

function Card({ index, cardImage, date, pairName, notes }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="w-full overflow-hidden rounded-2xl border-gray-200 bg-white md:w-lg md:border"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="h-12 w-12 rounded-full border border-gray-300"
          />
          <h2 className="text-md font-semibold text-gray-800">{pairName}</h2>
        </div>
        <PostDropdown />
      </div>

      {/* Image */}
      <div className="w-full">
        {cardImage && cardImage[index] && (
          <img
            src={cardImage[index]}
            alt={pairName}
            className="object-fit h-72 w-full"
          />
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Heart className="h-6 w-6 cursor-pointer transition hover:text-red-500" />
          <MessageCircle className="h-6 w-6 cursor-pointer transition hover:text-blue-500" />
          <Share2 className="h-6 w-6 cursor-pointer transition hover:text-green-500" />
        </div>
      </div>

      {/* Notes */}
      <div className="px-4 pb-4">
        <p className="pb-2 text-sm text-gray-700">
          <span className="font-semibold text-gray-900">{pairName}</span>{" "}
          {notes?.length > 0 ? notes : null}
        </p>
        <p className="text-xs text-gray-500">{date.slice(0, 10)}</p>
      </div>
    </motion.div>
  );
}

export default Card;
