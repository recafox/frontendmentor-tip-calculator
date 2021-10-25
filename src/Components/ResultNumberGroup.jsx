import { StyledResultNumberGroup } from './Styled/ResultNumberGroup.styled';

const ResultNumberGroup = ({labelText, unit, value}) => {
  return (
    <StyledResultNumberGroup className="styled-result-number-group">
      <div className="label">
        <p>{labelText}</p>
        <small>/ {unit}</small>
      </div>
      <div className="value">
        ${value}
      </div>
    </StyledResultNumberGroup>
  )
}

export default ResultNumberGroup;