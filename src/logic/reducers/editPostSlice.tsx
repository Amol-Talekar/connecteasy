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

export const editPost = createAsyncThunk(
  "editPost",
  //@ts-ignore
  async ({ id, editPostData }) => {
    try {
      const res = await axios.patch(
        //@ts-ignore
        `http://localhost:5000/posts/${id}`,
        editPostData
      );

      return res.data;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      return error.response.data;
    }
  }
);

const editPostSlice = createSlice({
  name: "editPost",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [editPost.pending]: (state, action) => {
      state.loading = true;
    },
    //@ts-ignore
    [editPost.fulfilled]: (
      //@ts-ignore
      state: Iposts,
      //@ts-ignore
      payload
    ) => {
      state.loading = false;

      if (payload.id) {
        state.postData = state.postData.map((item) =>
          item.id === payload.id ? payload : item
        );
      }
    },
    //@ts-ignore
    [editPost.rejected]: (state, { message }) => {
      state.error = message;
    },
  },
});

export default editPostSlice.reducer;
