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

export const changeLikes = createAsyncThunk(
  "changeLikes",
  //@ts-ignore
  async ({ id, updatednewpostData }) => {
    try {
      const res = await axios.patch(
        //@ts-ignore
        `http://localhost:5000/posts/${id}`,
        updatednewpostData
      );

      return res.data;
    } catch (error) {
      console.log(error);
      //@ts-ignore
      return error.response.data;
    }
  }
);

const changeLikesSlice = createSlice({
  name: "changeLikes",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [changeLikes.pending]: (state, action) => {
      state.loading = true;
    },
    //@ts-ignore
    [changeLikes.fulfilled]: (
      //@ts-ignore
      state: Iposts,
      //@ts-ignore
      payload
    ) => {
      state.loading = false;
      const {
        arg: { id },
      } = payload;
      if (id) {
        state.postData = state.postData.map((item) =>
          item.id === id ? payload : item
        );
      }
    },
    //@ts-ignore
    [changeLikes.rejected]: (state, { message }) => {
      state.error = message;
    },
  },
});

//export const { increaseLikes, increaseDisLikes } = changeLikesSlice.actions;

export default changeLikesSlice.reducer;

/*

{
  "likes": {
    "requestId": "LKDZFbb4MZzT3NNbcD73c",
    "signal": {}
  },
  "id": 4
}

*/
