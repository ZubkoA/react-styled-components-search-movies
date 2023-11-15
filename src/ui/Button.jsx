import styled, { css } from "styled-components";

const sizes = {
  small: css`
    right: 2.4rem;
    height: 1.8rem;
    font-size: 0.9rem;
  `,
  medium: css`
    font-size: 1.4rem;
    top: 0.8rem;
    right: 0.8rem;
  `,
  mediumAdd: css`
    font-size: 1.4rem;
    padding: 1rem;
    position: initial;
    height: initial;
    aspect-ratio: 0;
  `,
  large: css`
    font-family: sans-serif;
    font-size: 2.4rem;
    top: 0.8rem;
    left: 0.8rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-background-900);
    color: var(--color-text);
  `,
  secondary: css`
    background-color: #fff;
    color: var(--color-background-500);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  delete: css`
    background-color: var(--color-red);
    color: var(--color-background-900);
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-red-dark);
    }
  `,
  add: css`
    background-color: var(--color-primary);
    color: var(--color-text);
    transition: all 0.3s;
    border-radius: 10rem;

    &:hover {
      background-color: var(--color-primary-light);
    }
  `,
};

export const Button = styled.button`
  position: absolute;
  height: 2.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
