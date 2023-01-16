import styled from "styled-components";

export const PostGroupContainer = styled.div`
  width: 100%;

  padding: 8px;
`;

export const ThePost = styled.div`
  padding: 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 16px 8px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 8px;
    font-size: 24px;
  }

  p {
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  span {
    font-size: 22px;
  }
`;
export const LikeImg = styled.img`
  height: 20px;
`;

export const LikeButton = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  background-color: white;
  cursor: pointer;
`;

export const DisLikeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  min-width: 64px;
  span {
    font-size: 22px;
  }
`;
export const DisLikeImg = styled.img`
  height: 20px;
  background-color: transparent;
`;

export const DisLikeButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 4px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditButton = styled.button`
  border: none;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.theme.orange};
  }
`;
export const DeleteButton = styled.button`
  border: none;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.red};
  }
`;

export const AdvanceOptionBox = styled.div`
  border: 1px solid black;
  padding: 12px;
  height: 15vh;
  width: 100%;
`;
