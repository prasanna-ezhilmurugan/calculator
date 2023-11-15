import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELELTE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, {type, payload}) {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state  
      }
  }
}
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid grid grid-cols-4 max-w-md bg-slate-700 pl-3 rounded-3xl">
      <div className="output col-span-4 h-48 flex flex-col justify-end items-end">
        <div className="previous-operand text-white text-lg font-extrabold rounded-full px-5 py-2.5 text-center me-2 mb-2">
          {currentOperand}
        </div>
        <div className="current-operand text-white text-2xl font-extrabold rounded-full px-5 py-2.5 text-center me-2 mb-2">
          {previousOperand}
        </div>
      </div>

      <button className="col-span-2">AC</button>
      <button>DEL</button>
      <OperatorButton operator={"/"} />

      <DigitButton digit={7} dispatch={dispatch} />
      <DigitButton digit={8} dispatch={dispatch} />
      <DigitButton digit={9} dispatch={dispatch} />

      <OperatorButton operator={"*"} />

      <DigitButton digit={4} dispatch={dispatch} />
      <DigitButton digit={5} dispatch={dispatch} />
      <DigitButton digit={6} dispatch={dispatch} />

      <OperatorButton operator={"-"} />

      <DigitButton digit={1} dispatch={dispatch} />
      <DigitButton digit={2} dispatch={dispatch} />
      <DigitButton digit={3} dispatch={dispatch} />

      <OperatorButton operator={"+"} />

      <DigitButton digit={0} dispatch={dispatch} />

      <OperatorButton operator={"."} />
      <OperatorButton operator={"="} />
    </div>
  );
}

export default App;
