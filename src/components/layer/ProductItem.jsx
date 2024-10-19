// import React from "react";
// import { BiRefresh } from "react-icons/bi";
// import { FaCartShopping, FaHeart } from "react-icons/fa6";

// const Li = ({ name, iconName }) => {
//   return (
//     <li className=" flex items-center gap-4 text-ptext font-DM text-xl justify-end transition-all duration-200 cursor-pointer font-bold hover:text-primary ">
//       {name} {iconName}
//     </li>
//   );
// };

// const ProductItem = ({ offer, pName, price, brand, img, className }) => {
//   return (
//     <div className={`w-[370px] ${className}`}>
//       <div className="image w-full h-[370px] relative group  ">
//         <img className="w-full md:h-full object-cover" src={img} alt="" />

//         <div className="overlay absolute left-0 bottom-0 bg-white/40 w-full px-7 py-6 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
//           <ul className="flex flex-col gap-2">
//             <Li
//               name="Add to Wish List"
//               iconName={<FaHeart className="text-primary" />}
//             />
//             <Li
//               name="Compare"
//               iconName={<BiRefresh className="text-primary" />}
//             />
//             <Li
//               name="Add to Cart"
//               iconName={<FaCartShopping className="text-primary" />}
//             />
//           </ul>
//         </div>

//         {offer && (
//           <button className="absolute top-5 left-5  text-white w-[92px] py-2 font-DM bg-primary font-bold text-sm ">
          
//             {offer}
//           </button>
//         )}
//       </div>
//       <div className="text">
//         <div className="flex justify-between mt-6 mb-4">
//           <p className="text-primary font-DM font-bold text-xl">{pName}</p>
//           <span className="text-base font-DM leading-7 text-ptext">
//             ${price}
//           </span>
//         </div>
//         <p className="text-base font-DM leading-7 text-ptext mt-4">{brand}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
