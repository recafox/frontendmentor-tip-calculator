import { ActionType } from "../ActionTypes";

const initialState = {
  tipAmountPerPerson: '',
  totalPerPerson: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CALCULATE):
      return {
        tipAmountPerPerson: action.payload.tipAmountPerPerson,
        totalPerPerson: action.payload.totalPerPerson
      }
    case (ActionType.RESET_CALCULATION):
      return initialState;
    default:
      return state;
  }
}

export default reducer;