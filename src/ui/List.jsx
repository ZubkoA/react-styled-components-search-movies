import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
`;

export const Li = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  font-size: 1.6rem;
  align-items: center;

  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);

  ${(props) =>
    props.type === "movies" &&
    css`
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: var(--color-background-100);
      }
    `}
`;

export const Img = styled.img`
  width: 100%;
  grid-row: 1 / -1;
`;
