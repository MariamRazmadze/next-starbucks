"use client";

import { useState, useEffect } from "react";
import { Tab } from "./Tab";
import { TabContent } from "./TabContent";
import {
  RewardsContainer,
  TitleWrapper,
  RewardsTitle,
  RewardButtons,
  Underline,
} from "@/styles/StyledRewards";
import { getRewardsData } from "@/lib/getData";

export default function RewardSteps() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getRewardsData().then((rewardsData) => {
      setContent(rewardsData);
    });
  }, []);

  if (!content || !content[activeTab]) {
    return null;
  }

  return (
    <>
      <RewardsContainer>
        <TitleWrapper>
          <RewardsTitle>Get your favorites for free</RewardsTitle>
        </TitleWrapper>
        <RewardButtons>
          {content.map((item, index) => (
            <Tab
              key={item.id}
              num={index}
              activeTab={activeTab}
              onClick={setActiveTab}
              item={item}
            />
          ))}
          <Underline $left={activeTab * 20} />
        </RewardButtons>

        <TabContent item={content[activeTab]} />
      </RewardsContainer>
    </>
  );
}
