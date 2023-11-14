import styled, { css } from "styled-components";

export const ContWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  ${(props) =>
    props.type === "summery" &&
    css`
      gap: 2.4rem;
    `}
`;
export const PWraper = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
