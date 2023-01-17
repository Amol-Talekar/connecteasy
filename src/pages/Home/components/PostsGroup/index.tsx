import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../../logic/reducers/getAllPostsSlice";
import { RootState } from "../../../../logic/store";
import {
  AdvanceOptionBox,
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

import like from "../../../../assets/images/like.png";
import dislike from "../../../../assets/images/dislike.png";
import up from "../../../../assets/images/up.png";
import down from "../../../../assets/images/down.png";

import { deletePost } from "../../../../logic/reducers/deletePostSlice";
import { changeLikes } from "../../../../logic/reducers/changeLikesSlice";
import { EditPostModal } from "../EditPostModal";

export const PostsGroup = () => {
  const { postData } = useSelector((state: RootState) => state.allPosts);
  const [postMapData, setPostMapData] = useState(postData);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editObject, setEditObject] = useState({});
  const [isSortedByLikes, setSortedByLikes] = useState(false);
  const [isSortedByDislikes, setSortedByDislikes] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (postData) {
      //@ts-ignore
      setPostMapData(postData);
    }
  }, [postData]);

  const handleSortByLikes = () => {
    setSortedByLikes((prevState) => !prevState);

    const newSortedByLikesCopy = [...postMapData];
    //@ts-ignore
    newSortedByLikesCopy.sort((postA: any, postB: any) => {
      if (!isSortedByLikes) {
        return postA.likes - postB.likes;
      }

      if (isSortedByLikes) {
        return postB.likes - postA.likes;
      }
    });

    console.log("newSortedByLikesCopy: ", newSortedByLikesCopy);
    setPostMapData(newSortedByLikesCopy);
  };

  const handleSortByDisLikes = () => {
    setSortedByDislikes((prevState) => !prevState);

    const newSortedByDislikesCopy = [...postMapData];
    //@ts-ignore
    newSortedByDislikesCopy.sort((postA: any, postB: any) => {
      if (isSortedByDislikes) {
        return postA.dislikes - postB.dislikes;
      } else {
        return postB.dislikes - postA.dislikes;
      }
    });

    setPostMapData(newSortedByDislikesCopy);
  };

  const handleSearch = () => {
    const matchedPostsData = postData.filter((singlePost) => {
      return `${singlePost.title} ${singlePost.comment}`
        .toLowerCase()
        .includes(searchPhrase);
    });

    setPostMapData(matchedPostsData);
    setSearchPhrase("");
  };

  return (
    <PostGroupContainer>
      <AdvanceOptionBox>
        <input
          placeholder="look for a specific post"
          defaultValue={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSortByLikes}>
          <span>Likes</span>
          {isSortedByLikes ? (
            <img src={up} alt="Up" />
          ) : (
            <img src={down} alt="Down" />
          )}
        </button>
        <button onClick={handleSortByDisLikes}>
          <span>Dislikes</span>
          {isSortedByDislikes ? (
            <img src={up} alt="Up" />
          ) : (
            <img src={down} alt="Down" />
          )}
        </button>
      </AdvanceOptionBox>
      <>
        {postMapData.length > 0 ? (
          postMapData
            .map((item: any) => (
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
            .reverse()
        ) : (
          <h1>There was some error</h1>
        )}
      </>
    </PostGroupContainer>
  );
};
