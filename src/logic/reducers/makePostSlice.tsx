import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./getAllPostsSlice";

interface IMakePost {
  singlePost: object;
  loading: boolean;
  error: string;
}

const initialState: IMakePost = {
  singlePost: {},
  loading: true,
  error: "",
};

export const makePost = createAsyncThunk("makePost", async (body) => {
  try {
    const res = await axios.post("http://localhost:5000/posts", body);

    return res.data;
  } catch (error) {
    console.log(error);
    //@ts-ignore
    return error.response.data;
  }
});

const makePostSlice = createSlice({
  name: "makePost",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [makePost.pending]: (state, action) => {
      state.loading = true;
    },
    //@ts-ignore
    [makePost.fulfilled]: (
      //@ts-ignore
      state: IMakePost,
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
    [makePost.rejected]: (state, { message }) => {
      state.error = message;
    },
  },
});

export default makePostSlice.reducer;
