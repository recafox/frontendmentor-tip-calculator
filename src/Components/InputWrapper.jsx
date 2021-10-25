import { StyledInputWrapper } from './Styled/InputWrapper.styled.';
import { StyledLabel } from './Styled/Label.styled.';

const InputWrapper = ({ children, labelText }) => {
  return (
    <StyledInputWrapper className="styled-input-wrapper">
      <StyledLabel>
        {labelText}
      </StyledLabel>
      {children}
    </StyledInputWrapper>
  )
}

export default InputWrapper;