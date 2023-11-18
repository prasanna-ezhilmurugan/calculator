import React from "react";
import { ACTIONS } from "./App";

function Deldigit({ dispatch }) {
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => {
        dispatch({ type: ACTIONS.DELELTE_DIGIT });
      }}
    >
      DEL
    </button>
  );
}

export default Deldigit;
