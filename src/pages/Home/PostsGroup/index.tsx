import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../logic/reducers/getAllPostsSlice";
import { RootState } from "../../../logic/store";
import {
  ButtonBox,
  DeleteButton,
  DisLikeBox,
  DisLikeButton,
  DisLikeImg,
  EditButton,
  LikeBox,
  LikeButton,
  LikeImg,
  PostGroupContainer,
  ThePost,
} from "./style";

import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import { deletePost } from "../../../logic/reducers/deletePostSlice";
import { changeLikes } from "../../../logic/reducers/changeLikesSlice";
import { EditPostModal } from "../EditPostModal";

export const PostsGroup = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();
  const { postData } = useSelector((state: RootState) => state.allPosts);
  const [editObject, setEditObject] = useState({});

  const handleEditModal = (id: string, singleObject: any) => {
    setOpenEditModal(true);
    setEditObject(singleObject);
  };

  const fetchAllPostsData = () => {
    //@ts-ignore
    dispatch(getAllPosts());
  };

  const handleDeletePost = (id: string) => {
    //@ts-ignore
    dispatch(deletePost(id)).then(() => dispatch(getAllPosts()));
  };

  const handleIncreaseLikes = async (id: string, singlePost: any) => {
    let newlikes = Number(singlePost.likes) + 1;

    const updatednewpostData = { ...singlePost, likes: newlikes };

    //@ts-ignore
    dispatch(changeLikes({ id, updatednewpostData })).then(() =>
      //@ts-ignore
      dispatch(getAllPosts())
    );
  };

  const handleIncreaseDisLikes = (id: string, singlePost: any) => {
    let newdislikes = Number(singlePost.dislikes) + 1;

    const updatednewpostData = { ...singlePost, dislikes: newdislikes };
    //@ts-ignore
    dispatch(changeLikes({ id, updatednewpostData })).then(() =>
      //@ts-ignore
      dispatch(getAllPosts())
    );
  };

  useEffect(() => {
    fetchAllPostsData();
  }, []);

  const handleEditPostInModal = (singlePost: any) => {};

  return (
    <PostGroupContainer>
      <>
        {postData.length > 0 ? (
          postData.map((item) => (
            <ThePost key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.comment}</p>
              <ButtonBox>
                <LikeBox>
                  <LikeButton
                    onClick={() => handleIncreaseLikes(item.id, item)}
                  >
                    <LikeImg src={like} alt="Like" />
                  </LikeButton>
                  <span> {item.likes}</span>
                </LikeBox>

                <DisLikeBox>
                  <DisLikeButton
                    onClick={() => handleIncreaseDisLikes(item.id, item)}
                  >
                    <DisLikeImg src={dislike} alt="Dislike" />
                  </DisLikeButton>
                  <span> {item.dislikes}</span>
                </DisLikeBox>

                <EditButton onClick={() => handleEditModal(item.id, item)}>
                  <span>Edit</span>
                </EditButton>

                <DeleteButton onClick={() => handleDeletePost(item.id)}>
                  <span>Delete</span>
                </DeleteButton>
              </ButtonBox>

              {openEditModal ? (
                <EditPostModal
                  openEditModal={openEditModal}
                  setOpenEditModal={setOpenEditModal}
                  singlePost={editObject}
                />
              ) : null}
            </ThePost>
          ))
        ) : (
          <h1>There was some error</h1>
        )}
      </>
    </PostGroupContainer>
  );
};
