import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 86vh;
  top: 0;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 4px 12px;
  @media (max-width: 720px) {
    padding: 2px 2px;
    flex-direction: row;
    height: 80px;
    margin-bottom: 20px;

    justify-content: center;
  }
  /* @media (max-width: 420px) {
    display: none;
  } */
`;

export const SideBarBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  gap: 10px;
  align-items: center;

  //border: 1px solid black;
  width: 100%;

  :hover {
    background-color: rgb(220, 220, 220, 0.2);
    cursor: pointer;
  }
  @media (max-width: 720px) {
    gap: 0px;
  }
`;

export const IMG = styled.img`
  height: 48px;
`;

export const SidebarTitle = styled.h4`
  margin: 0;
  display: block;
  @media (max-width: 720px) {
    display: none;
  }
`;
