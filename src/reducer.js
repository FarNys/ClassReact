const initialState = {
  items: [],
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return { ...state, number: state.number + 3 };
    case "DECREASE_COUNT":
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
};
export default reducer;
