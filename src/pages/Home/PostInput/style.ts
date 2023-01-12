import { Form } from "formik";
import styled from "styled-components";

export const PostInputContainer = styled.div``;

// export const PostForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   padding: 20px;
//   width: 100%;
//   height: 25vh;

//   box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
//     rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
// `;

export const PostForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  width: 100%;
  height: 25vh;

  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const TitleInput = styled.input`
  padding: 4px;
  height: 24px;
  border: none;
  outline: none;

  :focus {
    border-bottom: 1px solid gray;
  }
`;

export const CommentArea = styled.textarea`
  border-radius: 4px;
  padding: 4px;
  height: 10vh;

  :focus {
    outline: 1px solid gray;
  }
`;

export const PostButton = styled.button`
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
