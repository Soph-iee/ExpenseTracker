import { FaCheck, FaEquals } from "react-icons/fa";

const Keyboard = ({
  Buttons,
  handleNumberPress,
  setNewExpense,
  dateInputRef,
  isExpression,
  input,
  
}) => {
  return (
    <main className="grid grid-cols-4 bg-blue-50  py-2 mt-2 rounded-xl shadow-xl relative">
      {Buttons.map((btn) => {
        let Display = btn.label;
        if (btn.value === "action") {
          Display = isExpression(input) ? FaEquals : FaCheck;
        }

        return (
          <button
            className="justify-self-center font-bold text-blue-950  text-2xl rounded-xl  bg-blue-300 w-14 h-10 my-1 flex items-center justify-center hover:bg-blue-200 active:bg-blue-200"
            key={btn.id}
            onClick={(e) => {
              e.preventDefault();
              handleNumberPress(btn.value);
            }}
          >
            {typeof Display === "string" || typeof Display === "number" ? (
              Display
            ) : (
              <Display />
            )}
          </button>
        );
      })}
      <input
        type="date"
        ref={dateInputRef}
        className="absolute top-0 w-0 h-0 opacity-0"
        onChange={(e) => {
          const Newdate = e.target.value;
          setNewExpense(prev=>({...prev, date:Newdate}))
        }}
      />
    </main>
  );
};

export default Keyboard;
