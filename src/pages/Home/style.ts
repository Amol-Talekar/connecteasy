import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 48px;

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
`;

export const FirstSectionBox = styled.div``;

export const SecondSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
