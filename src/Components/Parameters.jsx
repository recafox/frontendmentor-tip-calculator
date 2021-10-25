import InputWrapper from "./InputWrapper";
import InputGroup from './InputGroup';
import { StyledParametersWrapper } from "./Styled/ParametersWrapper.styled";
import TipOptions from "./TipOptions";
const Parameters = () => {
  return (
    <StyledParametersWrapper>
      <InputWrapper labelText="Bill">
        <InputGroup iconPath="icon-dollar.svg" />
      </InputWrapper>

      <InputWrapper labelText="Select Tip (%)">
        <TipOptions />
      </InputWrapper>

      <InputWrapper labelText="Number of People">
        <InputGroup iconPath="icon-person.svg" />
      </InputWrapper>

    </StyledParametersWrapper>
  )
}

export default Parameters;