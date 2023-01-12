import React from "react";
import { Sidebar } from "./Sidebar";
import { PostInput } from "./PostInput";
import { PostsGroup } from "./PostsGroup";
import { FirstSectionBox, HomeContainer, SecondSectionBox } from "./style";

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
    </HomeContainer>
  );
};
