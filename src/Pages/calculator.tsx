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



import { useState } from "react";

const Test = () => {
  const buttons = [
    { id: "impact", label: "impact", link: "#impact" },
    { id: "about", label: "about", link: "#about" },
    { id: "programs", label: "programs", link: "#programs" },
    { id: "support", label: "support", link: "#support" },
  ];
  const [activeBtn, setActiveBtn] = useState(null);
  const handleClick = (id) => {
    setActiveBtn(id);
    console.log(id);
    console.log(activeBtn);
  };
  return (
    <div>
      {buttons.map((btn) => {
        return (
          <NavBtn
            key={btn.id}
            {...btn}
            handleClick={handleClick}
            activeBtn={activeBtn}
          />
        );
      })}
    </div>
  );
};

const NavBtn = ({ id, label, handleClick, activeBtn }) => {
  const isActive = id === activeBtn;
  const style = `text-xl capitalize px-6 py-2 border border-gray-500 mt-4 mx-4 transition-all duration-500 ${
    isActive ? "bg-red-500" : "bg-yellow-500"
  }`;
  return (
    <div>
      <button
        onClick={() => {
          handleClick(id);
          console.log(isActive);
        }}
        className={style}
      >
        {label}
      </button>
    </div>
  );
};

export default Test;
