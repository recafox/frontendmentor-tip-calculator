import styled from "styled-components";

export const StyledResultNumberGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label {
    display: flex;
    flex-direction: column;

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
    }
    small {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  .value {
    color: ${({ theme }) => theme.colors.result};
    font-weight: 700;
    font-size: 48px;
    line-height: 71px;
    text-align: right;
  }
`;