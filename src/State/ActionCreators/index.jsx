import { ActionType } from "../ActionTypes";

export const setBill = (bill) => {
  return {
    type: ActionType.SET_BILL,
    payload: bill
  }
}

export const setTip = (tip) => {
  return {
    type: ActionType.SET_TIP,
    payload: tip
  }
}

export const setNumberOfPeople = (peopleNum) => {
  return {
    type: ActionType.SET_NUMBER_OF_PEOPLE,
    payload: peopleNum
  }
}


export const calculate = (tipAmountPerPerson, totalPerPerson) => {
  return {
    type: ActionType.CALCULATE,
    payload: {
      tipAmountPerPerson,
      totalPerPerson
    }
  }
}

export const resetCalculation = () => {
  return {
    type: ActionType.RESET_CALCULATION
  }
}