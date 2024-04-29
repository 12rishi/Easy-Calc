import React from "react";
import { useSelector } from "react-redux";

const DisplayCurrentValue = () => {
  const countValue = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current value:{countValue}</p>;
};

export default DisplayCurrentValue;
