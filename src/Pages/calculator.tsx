// import { useEffect, useState } from "react";

// function Test() {
//   const [object, setObject] = useState({
//     name: "",
//     age: "",
//   });

//   useEffect(() => {
//     if (object.name !== "" && object.age !== "") {
//       console.log(object);

//       console.log("mount");
//       setObject({ name: "", age: "" });
//     }
//   }, [object]);
//   return (
//     <div className="bg-red-50 w-full h-screen text-right">
//       <h1
//         className="p-2 border   border-red-400 mb-4"
//         onClick={() => {
//           setObject((prev) => ({ ...prev, name: "Bola" }));
//         }}
//       >
//         {object.name}
//       </h1>
//       <h2
//         className="p-2 border   border-red-900"
//         onClick={() => {
//           setObject((prev) => ({ ...prev, age: "10" }));
//         }}
//       >
//         {object.age}
//       </h2>
//     </div>
//   );
// }

// export default Test;



