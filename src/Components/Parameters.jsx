import InputWrapper from "./InputWrapper";
import InputGroup from './InputGroup';
import { StyledParametersWrapper } from "./Styled/ParametersWrapper.styled";
import TipOptions from "./TipOptions";
import { useActions } from '../Hooks/useActions';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Parameters = () => {
  const params = useSelector(state => state.params);
  const { setBill, setNumberOfPeople, calculate } = useActions();

  useEffect(() => {
    if (params.bill && params.tip && params.numberOfPeople) {
      const { bill, tip, numberOfPeople } = params;
      let tipAmountPerPerson = (bill * tip / numberOfPeople);
      let totalPerPerson = parseFloat((bill / numberOfPeople)) + tipAmountPerPerson;

      calculate(tipAmountPerPerson.toFixed(2), totalPerPerson.toFixed(2));
    }
  }, [params, calculate]);
  

  const billOnChange = (e) => {
    setBill(e.target.value);
  }

  const peopleOnChange = (e) => {
    setNumberOfPeople(e.target.value);
  }

  return (
    <StyledParametersWrapper>
      <InputWrapper labelText="Bill">
        <InputGroup iconPath="icon-dollar.svg" onChange={billOnChange} value={params.bill ? params.bill : ''}/>
      </InputWrapper>

      <InputWrapper labelText="Select Tip (%)">
        <TipOptions />
      </InputWrapper>

      <InputWrapper labelText="Number of People">
        <InputGroup iconPath="icon-person.svg" onChange={peopleOnChange} value={params.numberOfPeople ? params.numberOfPeople : ''}/>
      </InputWrapper>

    </StyledParametersWrapper>
  )
}

export default Parameters;