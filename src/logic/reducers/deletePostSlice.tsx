import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IDeletePost {
  singlePost: object;
  loading: boolean;
  error: string;
}

const initialState: IDeletePost = {
  singlePost: {},
  loading: true,
  error: "",
};

export const deletePost = createAsyncThunk("deletePost", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    //@ts-ignore
    return error.response.data;
  }
});

const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    //@ts-ignore
    [deletePost.fulfilled]: (
      //@ts-ignore
      state: IdeletePost,
      //@ts-ignore
      { payload: { error, singlePost, status, user, message } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = message;
      } else {
        state.singlePost = singlePost;
      }
    },
    //@ts-ignore
    [deletePost.rejected]: (state, { message }) => {
      state.error = message;
    },
  },
});

export default deletePostSlice.reducer;
