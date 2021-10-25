import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: 'Space Mono', monospace;
  background: ${({ theme, tone }) => tone === "lightGreen" ? theme.colors.result : theme.colors.base};
  color: ${({ theme, tone }) => tone === "lightGreen" ? theme.colors.base : theme.colors.white};
  height: 48px;
  width: 117px;
  border-radius: 5px;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.base};
  }

  &.is-selected {
    background: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.base};
  }

  &.is-calculated {
    background: ${({ theme }) => theme.colors.result};
    color: ${({ theme }) => theme.colors.base};
  }
`;