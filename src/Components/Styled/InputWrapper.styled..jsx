import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .error-message {
    position: absolute;
    top: 0;
    right: 0;
  }

  .has-error {
    border: 2px solid ${({ theme }) => theme.colors.error};
  }
`;