// import driver1 from "./pictures/max.png";
// import driver2 from "./pictures/no-driver.png";
// import classes from "./Drivers.module.css";

// import { useEffect, useState } from "react";
// import {
//   IoIosArrowDropleftCircle,
//   IoIosArrowDroprightCircle,
// } from "react-icons/io";

// function Drivers(props) {
//   const [indexDriver1, setIndexDriver1] = useState(0);
//   const [indexDriver2, setIndexDriver2] = useState(0);

//   const [data, setData] = useState([]);

//   function clickLeft1() {
//     if (indexDriver1 === 0) {
//       setIndexDriver1(props.Drivers.length - 1);
//     } else {
//       setIndexDriver1(indexDriver1 - 1);
//     }
//   }
//   function clickRight1() {
//     if (indexDriver1 === props.Drivers.length - 1) {
//       setIndexDriver1(0);
//     } else {
//       setIndexDriver1(indexDriver1 + 1);
//     }
//   }

//   function clickLeft2() {
//     if (indexDriver2 === 0) {
//       setIndexDriver2(props.Drivers.length - 1);
//     } else {
//       setIndexDriver2(indexDriver2 - 1);
//     }
//   }
//   function clickRight2() {
//     if (indexDriver2 === props.Drivers.length - 1) {
//       setIndexDriver2(0);
//     } else {
//       setIndexDriver2(indexDriver2 + 1);
//     }
//   }

//   if (!data) {
//     console.log("data is empty");
//     return <p>Loading content ...</p>;
//   } else {
//     return (
//       <div className={classes.drivers}>
//         <div className={classes.driver}>
//           <img src={driver1} alt="driver1"></img>
//           <div>
//             <button>
//               <IoIosArrowDropleftCircle />
//             </button>
//             <button onClick={clickRight1}>
//               <IoIosArrowDroprightCircle />
//             </button>
//           </div>
//         </div>
//         <div>
//           <img src={driver2} alt="driver2"></img>
//           <div>
//             <button>
//               <IoIosArrowDropleftCircle />
//             </button>
//             <button>
//               <IoIosArrowDroprightCircle />
//             </button>
//           </div>
//         </div>
//         {/* <div>{data[indexDriver1].name}</div>
//         <div>{data[indexDriver2].name}</div>
//         <div className={classes.flag}>
//           <span className="fi fi-nl" />
//         </div>
//         <div className={classes.flag}>
//           <span className="fi fi-gb" />
//         </div>
//         <div className={classes.rating}>{data[indexDriver1].average}</div>
//         <div className={classes.rating}>{data[indexDriver2].average}</div> */}
//       </div>
//     );
//   }
// }
// export default Drivers;
