import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 48px;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;
  @media (max-width: 720px) {
    grid-template-columns: auto;
    padding: 24px;
  }
  @media (max-width: 630px) {
    padding: 48px 12px;
  }
  @media (max-width: 420px) {
    padding: 48px 6px;
  }

  /* @media (max-width: 420px) {
    display: block;
  } */
`;

export const FirstSectionBox = styled.div``;

export const SecondSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ThirdSectionBox = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;

// export const H1 = styled.h1`
//   background: ${(props) => props.theme.success};
// `;

// export const test = styled.div.attrs(
//   (props: { mycolor: any }) => props
// )`
//   color: ${(props) => props.mycolor};

//   @media (max-width: ${(props) => props.theme.screenSizes.XS}px) {
//     width: 150px;
//   }
// `;
