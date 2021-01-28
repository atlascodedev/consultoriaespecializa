import React from "react"
import AppLayout from "../layout/AppLayout"
import { MenuItem } from "../pages"
import styled, { keyframes } from "styled-components"
import { Divider, SvgIcon } from "@material-ui/core"
import { ArrowDownward } from "@material-ui/icons"
import HTMLContent from "../components/UtilityComponents/HTMLContent"
import ContactSectionAlterative from "../components/AppComponents/ContactSectionAlternative"
import contactImg from "../images/post-contact.png"
import DefenseCard from "../components/AppComponents/DefenseCard"

type PostHeroBackgroundProps = {
  img: string
}

const PostHeroBackground = styled.div<PostHeroBackgroundProps>`
  width: 100%;
  height: 90vh;
  background-image: ${props => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: rgba(51, 51, 51, 0.712);
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Suez One";
`

const ArrowAnimation = keyframes`
  0% {
    transform: translateY(150px) 
  }

  25% {
    transform: translateY(175px)
  }

  50% {
    transform: translateY(150px)
  }

  75% {
    transform: translateY(175px)
  }

  100% {
    transform: translateY(150px)
  }
`

const PostHeroTextContainer = styled.div`
  text-align: center;
  height: 50%;
  position: relative;

  & .actionArrow {
    position: absolute;
    bottom: 20%;
    left: 40%;
    cursor: pointer;
    font-size: 45px;
    animation: 3.5s ${ArrowAnimation} ease-in-out infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  & .header {
    font-size: 30px;
  }

  & .summary {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    height: auto;

    & .header {
      font-size: 42px;
    }

    & .summary {
      font-size: 24px;
      color: #f5f5f5;
    }

    & .actionArrow {
      position: initial;
      cursor: pointer;
      font-size: 65px;
      transform: translateY(150px);
      animation: 3.5s ${ArrowAnimation} ease-in-out infinite;

      &:hover {
        animation-play-state: paused;
      }
    }
  }
`

const PostRootContainer = styled.div``

const PostHeroDescription = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  max-width: 1368px;
  font-family: "Suez One";
  font-weight: normal;

  & .markdownContent p > img {
    max-width: 100% !important;
  }

  & .markdownContent {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const PostHeroHeader = styled.div`
  font-family: "Suez One";
  text-align: center;
  color: #333;
  font-size: 24px;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    font-size: 35px;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`

const AtlasDivider = styled.div`
  margin-top: 10px;

  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > div {
    height: 3px;
    background-color: #4c58a4;
    border-radius: 6px;
    width: 60%;
  }

  & .secondLine {
    margin-top: 5px;
    height: 3px;
    background-color: #4c58a4;
    border-radius: 6px;
    width: 50%;
  }

  & .thirdLine {
    margin-top: 5px;
    height: 3px;
    background-color: #4c58a4;
    border-radius: 6px;
    width: 25%;
  }
`

const PostBenefitsSection = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: #f3f3f3;
`

const PostBenefitsInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
  justify-items: center;
  padding-bottom: 2em;

  @media (min-width: 768px) {
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
  }

  @media (min-width: 1024px) {
    padding-top: 1em;
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
  }
`

const PostContactSection = styled.div``

export type ServiceBenefit = {
  benefitDescription: string
  benefitName: string
}

type PostBenefitsProps = {
  benefits: Array<ServiceBenefit>
}

const PostBenefitsMain: React.FC<PostBenefitsProps> = ({ benefits = [] }) => {
  let renderComponent

  if (benefits.length > 0) {
    renderComponent = (
      <PostBenefitsSection>
        <PostHeroHeader>
          Veja quais serviços e benefícios esta solução trará a você
          <AtlasDivider>
            <div></div>
            <div className="secondLine"></div>
            <div className="thirdLine"></div>
          </AtlasDivider>
        </PostHeroHeader>

        <PostBenefitsInnerContainer>
          {benefits.map((benefit, index) => (
            <DefenseCard
              cardHeight={"auto"}
              text={benefit.benefitDescription}
              title={benefit.benefitName}
            />
          ))}
        </PostBenefitsInnerContainer>
      </PostBenefitsSection>
    )
  } else {
    renderComponent = null
  }

  return <div>{renderComponent}</div>
}

const Post: React.FC<any> = ({ pageContext }) => {
  console.log(pageContext)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: null,
    },

    {
      menuName: "Soluções",
      reference: null,
    },

    {
      menuName: "Contato",
      reference: null,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <PostRootContainer>
        <PostHeroBackground img={pageContext.featuredImage}>
          <PostHeroTextContainer>
            <div className="header">{pageContext.title}</div>
            <div className="summary">{pageContext.summary}</div>

            <SvgIcon
              className="actionArrow"
              component={ArrowDownward}
            ></SvgIcon>
          </PostHeroTextContainer>
        </PostHeroBackground>

        <PostHeroHeader>
          Saiba mais sobre esta solução para decidir se ela é a ideal para você!
          <AtlasDivider>
            <div></div>
            <div className="secondLine"></div>
            <div className="thirdLine"></div>
          </AtlasDivider>
        </PostHeroHeader>

        <PostHeroDescription>
          <HTMLContent
            className="markdownContent"
            content={pageContext.html}
          ></HTMLContent>
        </PostHeroDescription>

        <PostBenefitsMain benefits={pageContext.benefits} />

        <PostContactSection>
          <ContactSectionAlterative
            imagePosX={"0%"}
            sectionText="Ficou com alguma dúvida ou não encontrou o que procurava? Ligue para nós, a Consultoria Especializa está preparada para adaptar-se aos desafios e ajudar sua instituição alcançar seus objetivos!"
            image={contactImg}
          />
        </PostContactSection>
      </PostRootContainer>
    </AppLayout>
  )
}

export default Post
