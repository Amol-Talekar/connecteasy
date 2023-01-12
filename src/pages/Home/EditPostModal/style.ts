import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  background: rgba(32, 35, 40, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 40vw;
  height: 30vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    width: 75vw;
  }
`;
export const FormWithCloseButton = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 20px;
  width: 100%;
  height: 25vh;
  gap: 8px;
`;

export const EditPostForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const EditTitleInput = styled.input`
  padding: 4px;
  height: 24px;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;

  :focus {
    border: 1px solid gray;
  }
`;

export const EditCommentArea = styled.textarea`
  border-radius: 4px;
  padding: 4px;
  height: 10vh;

  :focus {
    outline: 1px solid gray;
  }
`;

export const EditPostButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 4px 24px;
  background-color: blue;
  height: 24px;
  width: 6vw;
  min-width: 70px;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    font-weight: bold;
  }
`;

export const EditCloseButton = styled.button`
  border: none;
  cursor: pointer;

  background-color: white;
  height: 12px;
  margin-right: -12px;
  margin-top: -6px;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  :hover {
    font-weight: bold;
  }
  img {
    height: 20px;
  }
`;
