import styled from "styled-components";

export const StyledInput = styled.input`
    border: none;
    color: ${({ theme }) => theme.colors.base};
    font-size: 24px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.input};
    overflow: hidden;
    border-radius: 5px;
    text-align: center;

    &::placeholder {
      font-family: 'Space Mono', monospace;
    }
    &:focus {
      outline: none;
    }
`;