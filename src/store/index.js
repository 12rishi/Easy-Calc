import { createStore } from "redux";
const INITIAL_VALUE = {
  counter: 0,
};
const countReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.val) };
  } else if (action.type === "SUB") {
    return { counter: store.counter - Number(action.payload.val) };
  }
  return store;
};
const counterStore = createStore(countReducer);
export default counterStore;
