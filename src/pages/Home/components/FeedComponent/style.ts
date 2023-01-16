import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export const FeedContainer = styled.div`
  top: 0;
  position: sticky;
`;

export const TwitterTimelineEmbedBox = styled(TwitterTimelineEmbed)`
  @media (max-width: 720px) {
    width: 100%;
  }
`;
