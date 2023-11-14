import styled, { css } from "styled-components";

export const Button = styled.button`
  position: absolute;

  height: 2.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;

  font-weight: bold;
  cursor: pointer;
  z-index: 999;

  ${(props) =>
    props.type === "box" &&
    css`
      top: 0.8rem;
      right: 0.8rem;
      background-color: var(--color-background-900);
      color: var(--color-text);
      font-size: 1.4rem;
    `}
  ${(props) =>
    props.type === "back" &&
    css`
      top: 0.8rem;
      left: 0.8rem;
      background-color: #fff;
      color: var(--color-background-500);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
      font-family: sans-serif;
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

     ${(props) =>
    props.type === "delete" &&
    css`
      right: 2.4rem;
      height: 1.8rem;

      background-color: var(--color-red);
      color: var(--color-background-900);
      font-size: 0.9rem;
      transition: all 0.3s;

      &:hover {
  background-color: var(--color-red-dark);
    `}
`;

export const ButtonAdd = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text);
  border: none;
  border-radius: 10rem;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;
