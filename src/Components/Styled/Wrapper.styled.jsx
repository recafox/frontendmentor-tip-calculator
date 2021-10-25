import styled from "styled-components";

export const Wrapper = styled.div`
  height: 481px;
  width: 920px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px, 32px rgba(79, 166, 175, 0.2007));
  padding: 45px 48px;
`;