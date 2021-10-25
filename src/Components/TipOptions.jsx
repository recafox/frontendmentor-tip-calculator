import Button from './Button';
import { StyledInput } from './Styled/Input.styled';
import { StyledTipsWrapper } from './Styled/TipWrapper.styled';
const tipOptions = [
  {
    text: '5%',
    value: 0.05
  },
  {
    text: '10%',
    value: 0.10
  },
  {
    text: '15%',
    value: 0.15
  },
  {
    text: '25%',
    value: 0.25
  },
  {
    text: '5%',
    value: 0.50
  },
]

const TipOptions = () => {
  const renderOptions = () => tipOptions.map(tip => {
    return <Button text={tip.text} key={tip.text} />
  });

  return (
    <StyledTipsWrapper>
      {renderOptions()}
      <StyledInput placeholder="Custom" />
    </StyledTipsWrapper>
  )
}

export default TipOptions;