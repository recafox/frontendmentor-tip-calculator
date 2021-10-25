import { StyledInputGroup } from "./Styled/InputGroup.styled"
import { StyledInput } from "./Styled/Input.styled";
import { useState } from 'react';

const InputGroup = ({ iconPath, placeholder, value, onChange }) => {
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    if (isNaN(parseInt(e.target.value)) === true) {
      setError("Invalid input");
      onChange(e);
      return;
    }
    setError("");
    onChange(e);
  }
  return (
    <StyledInputGroup className={error && 'has-error'}>
      <img src={`./images/${iconPath}`} alt="" />
      <StyledInput value={value} placeholder={placeholder} onChange={e => {handleOnChange(e)}} />
      <label className="error-message">{error}</label>
    </StyledInputGroup>
  )
}

export default InputGroup;