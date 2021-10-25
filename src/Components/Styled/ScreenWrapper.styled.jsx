import styled from "styled-components";

export const StyledScreenWrapper = styled.div`
  background: ${({ theme }) => theme.colors.base};
  border-radius: 15px;
  padding: 40px;
  width: calc(50% - 24px);
  display: flex;
  flex-direction: column;

  .styled-result-number-group:first-of-type {
    margin-bottom: 40px;
  }

  button {
    margin-top: auto;
    width: 100%;
  }
`;