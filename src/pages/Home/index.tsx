import React from "react";
import { Sidebar } from "./components/Sidebar";
import { PostInput } from "./components/PostInput";
import { PostsGroup } from "./components/PostsGroup";
import {
  FirstSectionBox,
  HomeContainer,
  SecondSectionBox,
  ThirdSectionBox,
} from "./style";
import { FeedComponent } from "./components/FeedComponent";

export const Home = () => {
  return (
    <HomeContainer>
      <FirstSectionBox>
        <Sidebar />
      </FirstSectionBox>

      <SecondSectionBox>
        <PostInput />
        <PostsGroup />
      </SecondSectionBox>

      <ThirdSectionBox>
        <FeedComponent />
      </ThirdSectionBox>
    </HomeContainer>
  );
};
