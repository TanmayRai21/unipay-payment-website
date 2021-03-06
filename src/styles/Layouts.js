import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem 18rem;
  @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

export const InnerLayout = styled.section`
    padding: 6rem 0;
    @media screen and (max-width: 500px) {
      padding: 4rem 0;
    }
`;