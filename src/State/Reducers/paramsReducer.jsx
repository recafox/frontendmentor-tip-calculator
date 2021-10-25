import { ActionType } from "../ActionTypes";
const initialState = {
  bill: 0,
  tip: 0,
  numberOfPeople: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.SET_BILL):
      return { ...state, bill: action.payload};
    case (ActionType.SET_NUMBER_OF_PEOPLE):
      return { ...state, numberOfPeople: action.payload };
    case (ActionType.SET_TIP):
      return { ...state, tip: parseFloat(action.payload)};
    case (ActionType.RESET_CALCULATION):
      return initialState;
    default:
      return state;
  }
}

export default reducer;