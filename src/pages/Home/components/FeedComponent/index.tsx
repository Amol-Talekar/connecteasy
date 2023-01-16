import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FeedContainer, TwitterTimelineEmbedBox } from "./style";

export const FeedComponent = () => {
  return (
    <FeedContainer>
      <TwitterTimelineEmbedBox
        sourceType="profile"
        screenName="BBCWorld"
        options={{
          tweetLimit: "5",
          height: 800,
          width: 400,
        }}
        theme="light"
        //   noHeader="true"
        //   noBorders="true"
        //   noFooter="true"
      ></TwitterTimelineEmbedBox>
    </FeedContainer>
  );
};
