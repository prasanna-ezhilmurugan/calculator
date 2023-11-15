import React from "react";

function DigitButton(props) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      // onClick={(prevValue) =>{
      //   props.dispatch({...prevValue, currentOperation=props.digit})
      // }}
    >
      {props.digit}
    </button>
  );
}

export default DigitButton;
