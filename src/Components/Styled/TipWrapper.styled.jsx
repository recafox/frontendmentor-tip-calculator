import styled from 'styled-components';

export const StyledTipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    margin-right: 14px;
    margin-bottom: 16px;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  input {
    height: 48px;
    display: inline-flex;
    width: 117px;
  }
`;