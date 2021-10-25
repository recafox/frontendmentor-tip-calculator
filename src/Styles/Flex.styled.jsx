import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;