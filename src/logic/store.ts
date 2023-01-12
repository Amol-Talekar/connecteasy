import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./reducers/getAllPostsSlice";
import makePostSlice from "./reducers/makePostSlice";
import deletePostSlice from "./reducers/deletePostSlice";
import changeLikesSlice from "./reducers/changeLikesSlice";
import editPostSlice from "./reducers/editPostSlice";

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice,
    makePost: makePostSlice,
    deletePost: deletePostSlice,
    changeLikes: changeLikesSlice,
    editPosts: editPostSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
