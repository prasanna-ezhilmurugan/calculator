import React from "react";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton"

function App() {
  return (
    <div className="calculator-grid grid grid-cols-4 max-w-md bg-slate-700 pl-3 rounded-3xl" >

        <div className="output col-span-4 h-48 flex flex-col justify-end items-end">
            <div className="previous-operand text-white text-lg font-extrabold rounded-full px-5 py-2.5 text-center me-2 mb-2">{123123}</div>
            <div className="current-operand text-white text-2xl font-extrabold rounded-full px-5 py-2.5 text-center me-2 mb-2">{123123}</div>
        </div>

        <OperatorButton operator = {"AC"} />
        <OperatorButton operator = {"DEL"} />
        <OperatorButton operator = {"/"} />

        <DigitButton digit={7} />
        <DigitButton digit={8} />
        <DigitButton digit={9} />

        <OperatorButton operator = {"*"} />

        <DigitButton digit={4} />
        <DigitButton digit={5} />
        <DigitButton digit={6} />

        <OperatorButton operator = {"-"} />

        <DigitButton digit={1} />
        <DigitButton digit={2} />
        <DigitButton digit={3} />

        <OperatorButton operator = {"+"} />

        <DigitButton digit={0} />

        <OperatorButton operator = {"."} />
        <OperatorButton operator = {"="} />
    </div>
  );
}

export default App;
