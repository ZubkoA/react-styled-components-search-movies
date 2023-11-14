import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      margin-bottom: 0.4rem;
      line-height: 1.1;
    `}
`;
