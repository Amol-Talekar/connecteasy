import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import {
  CommentArea,
  PostButton,
  PostForm,
  PostInputContainer,
  TitleInput,
} from "./style";
import { useDispatch } from "react-redux";
import { InputGroup } from "../../InputGroup/InputGroup";
import { makePost } from "../../../logic/reducers/makePostSlice";
import { getAllPosts } from "../../../logic/reducers/getAllPostsSlice";

interface Isinglepost {
  id: string;
  title: string;
  comment: string;
  likes: number;
  dislikes: number;
}

const initialSinglePost: Isinglepost = {
  id: "",
  title: "",
  comment: "",
  likes: 0,
  dislikes: 0,
};

export const PostInput = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    let tempPost: Isinglepost = {
      id: uuidv4(),
      title: title,
      comment: comment,
      likes: 0,
      dislikes: 0,
    };

    //@ts-ignore
    dispatch(makePost(tempPost))
      //@ts-ignore
      .then(() => dispatch(getAllPosts()))
      .then(() => {
        setTitle("");
        setComment("");
      });
  };

  return (
    <PostInputContainer>
      <PostForm>
        <TitleInput
          placeholder="What's on your mind?"
          name="mytitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CommentArea
          name="mycomment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <PostButton onClick={handleOnSubmit}>
          <span>Post</span>
        </PostButton>
      </PostForm>
    </PostInputContainer>
  );
};
