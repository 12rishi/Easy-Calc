import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const add = () => {
    dispatch({
      type: "ADD",
      payload: {
        val: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const subtract = () => {
    dispatch({
      type: "SUB",
      payload: {
        val: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button type="button" class="btn btn-primary" onClick={increment}>
          +1
        </button>
        <button type="button" class="btn btn-success" onClick={decrement}>
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center margin">
        <input type="text" placeholder="Enter the number" ref={inputElement} />
        <button type="button" class="btn btn-danger" onClick={add}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={subtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Buttons;
