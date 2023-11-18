import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton";
import EvalButton from "./EvalButton";
import ClearAllButton from "./ClearAllButton";
import Deldigit from "./Deldigit";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELELTE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function evaluate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return (num1 / num2).toFixed(2);
    default:
      return ""
  }
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: `${state.currentOperand}${payload}`,
        currentOperand: "",
        operation: payload,
      };
    case ACTIONS.EVALUATE:
      return {
        ...state,
        previousOperand: `${state.previousOperand}${state.currentOperand}`,
        currentOperand: `${evaluate(
          parseInt(state.previousOperand),
          parseInt(state.currentOperand),
          state.operation
        )}`,
      };
    case ACTIONS.DELELTE_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand.slice(0, -1)}`,
      };
    case ACTIONS.CLEAR:
      return {};
    default:
      break;
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
          {previousOperand}
        </div>
        <div className="current-operand text-white text-2xl font-extrabold rounded-full px-5 py-2.5 text-center me-2 mb-2">
          {currentOperand}
        </div>
      </div>

      <ClearAllButton dispatch={dispatch}/>
      <Deldigit dispatch={dispatch}/>
      <OperatorButton operator={"/"} dispatch={dispatch} />

      <DigitButton digit={7} dispatch={dispatch} />
      <DigitButton digit={8} dispatch={dispatch} />
      <DigitButton digit={9} dispatch={dispatch} />

      <OperatorButton operator={"*"} dispatch={dispatch} />

      <DigitButton digit={4} dispatch={dispatch} />
      <DigitButton digit={5} dispatch={dispatch} />
      <DigitButton digit={6} dispatch={dispatch} />

      <OperatorButton operator={"-"} dispatch={dispatch} />

      <DigitButton digit={1} dispatch={dispatch} />
      <DigitButton digit={2} dispatch={dispatch} />
      <DigitButton digit={3} dispatch={dispatch} />

      <OperatorButton operator={"+"} dispatch={dispatch} />

      <DigitButton digit={0} dispatch={dispatch} />

      <OperatorButton operator={"."} dispatch={dispatch} />
      <EvalButton operator={"="} dispatch={dispatch} />
    </div>
  );
}

export default App;
