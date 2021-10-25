import { StyledScreenWrapper } from "./Styled/ScreenWrapper.styled";
import ResultNumberGroup from './ResultNumberGroup';
import Button from "./Button";
import { useSelector } from "react-redux";
import { useActions } from '../Hooks/useActions';

const Screen = () => {
  const { resetCalculation } = useActions();
  const result = useSelector(state => state.result);
  return (
    <StyledScreenWrapper>
      <ResultNumberGroup labelText="Tip Amount" unit="person" value={result.tipAmountPerPerson} />
      <ResultNumberGroup labelText="Total" unit="person" value={result.totalPerPerson} />
      <Button text="Reset" tone="lightGreen" onClick={resetCalculation}></Button>
    </StyledScreenWrapper>
  )
}

export default Screen;