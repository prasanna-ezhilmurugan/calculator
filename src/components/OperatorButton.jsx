import React from "react";

function OperatorButton(props) {
  return (
    <button
      type="button"
      // eslint-disable-next-line no-useless-concat
      className={
        ["AC", "="].includes(props.operator)
          ? "col-span-2 text-white bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          : "text-white bg-blue-200 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      }
    >
      {props.operator}
    </button>
  );
}

export default OperatorButton;
