import { StyledButton } from "./Styled/Button.styled"

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <StyledButton onClick={onClick} {...props}>
      {text}
    </StyledButton>
  )
}

export default Button;