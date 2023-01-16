import { useState } from "react";
import { PostButton } from "../PostInput/style";
import {
  EditCloseButton,
  EditCommentArea,
  EditPostButton,
  EditPostForm,
  EditTitleInput,
  FormWithCloseButton,
  ModalContent,
  ModalWrapper,
} from "./style";
import close from "../../../../assets/images/close.png";
import { editPost } from "../../../../logic/reducers/editPostSlice";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../../../logic/reducers/getAllPostsSlice";

export const EditPostModal = (props: any) => {
  const { setOpenEditModal, openEditModal, singlePost } = props;
  const [editTitle, setEditTitle] = useState("");
  const [editComment, setEditComment] = useState("");

  let dispatch = useDispatch();

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleEditSubmit = async () => {
    let id = singlePost.id;
    const editPostData = {
      ...singlePost,
      title: editTitle.length > 0 ? editTitle : singlePost.title,
      comment: editComment.length > 0 ? editComment : singlePost.comment,
    };

    //@ts-ignore
    dispatch(editPost({ id, editPostData }))
      .then(() => setOpenEditModal(false))
      .then(() =>
        //@ts-ignore
        dispatch(getAllPosts())
      );
  };

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <FormWithCloseButton>
            <EditPostForm>
              <EditTitleInput
                placeholder={singlePost.title}
                name="mytitle"
                type="text"
                defaultValue={singlePost.title}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <EditCommentArea
                placeholder={singlePost.comment}
                defaultValue={singlePost.comment}
                onChange={(e) => setEditComment(e.target.value)}
              />

              <EditPostButton onClick={handleEditSubmit}>
                <span>Post</span>
              </EditPostButton>
            </EditPostForm>

            <EditCloseButton onClick={handleClose}>
              <img src={close} alt="Close" />
            </EditCloseButton>
          </FormWithCloseButton>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
