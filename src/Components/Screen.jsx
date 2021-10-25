import { StyledScreenWrapper } from "./Styled/ScreenWrapper.styled";
import ResultNumberGroup from './ResultNumberGroup';
import Button from "./Button";

const Screen = () => {
  return (
    <StyledScreenWrapper>
      <ResultNumberGroup labelText="Tip Amount" unit="person" value="0.00"/>
      <ResultNumberGroup labelText="Total" unit="person" value="0.00"/>
      <Button text="Reset" tone="lightGreen" ></Button>
    </StyledScreenWrapper>
  )
}

export default Screen;