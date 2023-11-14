import styled from "styled-components";

export const Details = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
`;
export const Header = styled.header`
  display: flex;
`;
export const Section = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Img = styled.img`
  width: 33%;
`;

export const WrapText = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: var(--color-background-100);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const WrapRating = styled.div`
  background-color: var(--color-background-100);
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
