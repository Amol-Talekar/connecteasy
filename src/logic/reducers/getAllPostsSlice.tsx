import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

interface Iposts {
  status: string;
  postData: Array<Isinglepost>;
  loading: boolean;
  error: string;
}

const initialState: Iposts = {
  status: "",
  postData: [],
  loading: false,
  error: "",
};

export const getAllPosts = createAsyncThunk("getAllPosts", async () => {
  try {
    const res = await axios.get(`http://localhost:5000/posts`);

    return res.data;
  } catch (error) {
    //@ts-ignore
    return error.response.data;
  }
});

const getAllPostsSlice = createSlice({
  name: "getAllPosts",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [getAllPosts.pending]: (state, action) => {
      state.loading = true;

      state.error = "";
    },
    //@ts-ignore
    [getAllPosts.fulfilled]: (
      //@ts-ignore
      state: Iposts,
      //@ts-ignore
      { payload, error }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.postData = payload;
      }
    },
    //@ts-ignore
    [getAllPosts.rejected]: (state, { message }) => {
      state.error = message;
      state.loading = false;
    },
  },
});

export default getAllPostsSlice.reducer;
