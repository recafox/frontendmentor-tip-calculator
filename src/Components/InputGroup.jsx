import { StyledInputGroup } from "./Styled/InputGroup.styled"
import { StyledInput } from "./Styled/Input.styled";
const InputGroup = ({ iconPath, placeholder, value }) => {
  return (
    <StyledInputGroup>
      <img src={`./images/${iconPath}`} alt="" />
      <StyledInput value={value} placeholder={placeholder} />
    </StyledInputGroup>
  )
}

export default InputGroup;