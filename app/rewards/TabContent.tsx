import {
  ContentWrapper,
  Content,
  ContentImage,
  ContentText,
  Promo,
} from "@/styles/StyledRewards";

export function TabContent({ item }: TabContentProps) {
  return (
    <ContentWrapper>
      <Content>
        <ContentImage src={item.photoName} alt={item.title} />
        <ContentText>
          <h3 style={{ lineHeight: "1.5" }}>{item.title}</h3>
          <Promo>{item.promo}</Promo>
        </ContentText>
      </Content>
    </ContentWrapper>
  );
}
