import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>callsaasはフツーの電話代行サービスとはちょっと違います</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>選べる通知機能</FeatureTitle>
          <FeatureText>
            Slack, Discord, Mail, Teams, Google Chatに対応
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>安心のセキュリティ</FeatureTitle>
          <FeatureText>
            {/* Your data is always safe with us as we use the latest security
            protocols.（このまま使えそう） */}
            顧客のデータは厳格に保護されるので、ビジネスに安心してご利用いただけます。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>最適なワークフロー</FeatureTitle>
          <FeatureText>
            あなたのビジネスを最適化するためのスマートなワークフローを構築します。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>法人/個人どちらでもOK</FeatureTitle>
          <FeatureText>
          法人でも個人でもご利用いただけます。
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>業界最安</FeatureTitle>
          <FeatureText>基本料金100ドル+月100件まで無料</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>オンライン完結</FeatureTitle>
          <FeatureText>
          オンラインで簡単申込。面倒な書類等不要です。
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
