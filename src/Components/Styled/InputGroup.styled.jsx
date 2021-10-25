import styled from "styled-components";

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 5px;
  padding: 0 17px;
  img {
    width: auto;
    height: 16px;
  }

  input {
    width: 90%;
    margin-left: auto;
    text-align: right;
  }

  .error-message {
    color: ${({ theme }) => theme.colors.error};
    font-size: 16px;
    line-height: 24px;
  }
`;

