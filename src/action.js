export const addCount = () => {
  console.log("Action Run");
  return { type: "ADD_COUNT" };
};
export const decCount = (num) => {
  return { type: "DECREASE_COUNT", payload: num };
};
