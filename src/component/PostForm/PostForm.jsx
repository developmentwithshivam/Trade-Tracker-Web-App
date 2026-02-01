// import React, { useState, useEffect } from "react";
// // import Closebtn from "../Button/Closebtn";
// import { useForm } from "react-hook-form";
// import { uploadData } from "../../appwrite/Database/database";
// import LoadingSpinner from "../loading/loadingspinner";
// import { useDispatch } from "react-redux";
// import { setisopen, setisupdated } from "../../redux/slice/Form/PostFromSlice";
// import { uploadimage } from "../../appwrite/Storage/storage";

// function PostForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [loding, setloding] = useState(false);
//   const [previewimage, setpreviewimage] = useState(null);
//   const dispatch = useDispatch();

//   const previewimagefunc = (e) => {
//     setpreviewimage(URL.createObjectURL(e.target.files[0]));
//   };
//   const fields = [
//     {
//       name: "pair",
//       placeholder: "Enter Pair (e.g., EUR/USD)",
//       type: "text",
//       inputtype: "text",
//     },
//     {
//       name: "date",
//       type: "date",
//       inputtype: "text",
//     },
//     {
//       name: "time",
//       type: "time",
//       inputtype: "text",
//     },
//     {
//       name: "notes",
//       placeholder: "Write your trade reasoning/notes...",
//       inputtype: "textarea",
//     },
//     {
//       name: "image",
//       type: "file",
//       inputtype: "image",
//     },
//   ];

//   // const onsubmit = (data) => {
//   //   console.log(data);
//   //   setloding(true);
//   //   uploadData(data).then((response)=>{
//   //     if(response){
//   //       console.log(data);
//   //       // console.log("from if of the ----", data.image[0]);
//   //       uploadimage(data).then(()=>{
//   //         dispatch(setisupdated(true));
//   //         reset();
//   //         dispatch(setisopen(false))
//   //       })
//   //     }
//   //   }).finally(()=>{
//   //     setloding(false)
//   //   })
//   // };
//   const onsubmit = async (data) => {
//     console.log(data);
//     try {
//       setloding(true);
//       const response = await uploadData(data);
//       const responseImage = await uploadimage(data);

//       if (responseImage && response) {
//         dispatch(setisupdated(true));
//         reset();
//         dispatch(setisopen(false));
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setloding(false);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden"; // Disable scroll
//     return () => {
//       document.body.style.overflow = "auto"; // Re-enable scroll on close
//     };
//   }, []);

//   const closeform = () => {
//     dispatch(setisopen(false));
//   };

//   return (
//     <>
//       <div className="absolute z-10 flex items-center justify-center">
//         <div
//           className="h-screen w-screen bg-black opacity-40"
//           onClick={closeform}
//         ></div>
//         <form
//           onSubmit={handleSubmit(onsubmit)}
//           className="absolute mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow"
//         >
//           <Closebtn />
//           <h2 className="text-center text-xl font-bold">Add Trade Entry</h2>

//           {fields.map((items) => {
//             if (items.inputtype === "textarea") {
//               return (
//                 <textarea
//                   key={items.name}
//                   {...register(items.name, { required: false })}
//                   placeholder={items?.placeholder}
//                   rows={4}
//                   className="w-full rounded border px-4 py-2"
//                 />
//               );
//             }
//             if (items.inputtype === "image") {
//               return (
//                 <div key={items.name}>
//                   <input
//                     {...register(items.name, {
//                       required: false,
//                       onChange: (e) => {
//                         previewimagefunc(e);
//                       },
//                     })}
//                     type={items.type}
//                     multiple
//                     accept="image"
//                     className="w-full rounded border-2 border-orange-500 px-4 py-2"
//                   />
//                   {errors[items.name] && (
//                     <div className="text-sm text-red-600">
//                       This field is required
//                     </div>
//                   )}
//                 </div>
//               );
//             }
//             return (
//               <div key={items.name}>
//                 <input
//                   {...register(items.name, { required: false })}
//                   type={items.type}
//                   placeholder={items?.placeholder}
//                   className="w-full rounded border px-4 py-2"
//                 />
//                 {errors[items.name] && (
//                   <div className="text-sm text-red-600">
//                     This field is required
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//           {previewimage && (
//             <img src={previewimage} alt="Preview img" className="h-20 w-20" />
//           )}
//           <button
//             type="submit"
//             className="h-auto w-full rounded bg-purple-600 py-2 font-semibold text-white transition hover:cursor-pointer hover:bg-purple-700"
//           >
//             {loding && (
//               <LoadingSpinner
//                 divheight={"12"}
//                 thickness={"border-4"}
//                 size={"h-6 w-6"}
//                 colour={"border-white"}
//               />
//             )}
//             {!loding && "submit Trade"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default PostForm;
