import Button from './Button';
import { StyledInput } from './Styled/Input.styled';
import { StyledTipsWrapper } from './Styled/TipWrapper.styled';
import { useActions } from '../Hooks/useActions';
import { useSelector } from 'react-redux';

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
    text: '50%',
    value: 0.50
  },
]

const TipOptions = () => {
  const params = useSelector(state => state.params);
  const { setTip } = useActions();

  const addBtnClass = (value) => {
    if (params.bill && params.tip === value && params.numberOfPeople) {
      // calculated
      return 'is-calculated';
    }

    if (params.tip === value) {
      return 'is-selected';
    }
  }

  const renderOptions = () => tipOptions.map(tip => {
    return (
      <Button
        className={addBtnClass(tip.value)}
        text={tip.text}
        key={tip.text}
        onClick={() => {setTip(tip.value)}}
      />
    )
  });

  return (
    <StyledTipsWrapper>
      {renderOptions()}
      <StyledInput placeholder="Custom" onChange={e => setTip(e.target.value)}/>
    </StyledTipsWrapper>
  )
}

export default TipOptions;