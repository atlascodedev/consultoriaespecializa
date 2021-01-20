import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import bgImage from "../../../images/hero-img.jpg"

type LandingBackgroundHeroProps = {
  image: string | null
}

const LandingBackgroundHero = styled.div<LandingBackgroundHeroProps>`
  position: relative;
  z-index: 1;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  height: calc(70vh - 90px);
  width: 100%;

  @media (min-width: 1024px) {
    height: calc(110vh - 90px);
    display: flex;
  }
`

const LandingHeroGridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
  place-items: center;
  font-family: "Barlow";
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`

const LandingHeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    order: 1;
  }
`

const LandingHeroImage: any = styled(GatsbyImage)`
  width: 85%;
  height: 85%;

  @media (min-width: 768px) {
    margin-top: 2em;
    width: 85%;
    height: 85%;
  }

  @media (min-width: 1024px) {
    /* height: 100%; */
    /* width: 100%; */
  }
`

const LandingHeroTextContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: center;
    margin-left: 2em;
    margin-top: 0em;
  }
`

const LandingHeroTextInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1024px) {
    justify-content: center;
    width: 100%;
  }
`

const HeroTextMainText = styled.div`
  font-weight: 700;
  color: #2a2a2a;
  width: 100%;
  font-family: "Suez One";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  font-size: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin-left: 0px;
    & > h1 {
      margin: 0;
      & > span {
        color: #2a2a2a;
      }
    }
  }

  & .secondaryText {
    > p {
      font-weight: 400;
      color: #1f1f1f;
      width: 65%;
    }
  }

  & .ctaButton {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    & > div {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    & > div {
      font-size: 22px;
      line-height: 1.2;
    }
  }
`

type LandingHeroProps = {
  ctaRef: React.RefObject<HTMLElement>
}

const LandingHero: React.FC<LandingHeroProps> = ({ ctaRef }) => {
  const heroImgWebp = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [cta, setCta] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    if (ctaRef) {
      setCta(ctaRef.current)
    }
  }, [])

  return (
    <div>
      <LandingBackgroundHero image={bgImage}>
        <LandingHeroGridContainer>
          {/* <LandingHeroImageContainer>
            <LandingHeroImage
              imgStyle={{ objectFit: "cover" }}
              fluid={heroImgWebp.file.childImageSharp.fluid}
            />
          </LandingHeroImageContainer> */}

          <LandingHeroTextContainer>
            <LandingHeroTextInnerContainer>
              <HeroTextMainText>
                <div>
                  <h1>
                    Transformando a sociedade através da{" "}
                    <span>cidadania cultural</span>{" "}
                  </h1>
                </div>

                <div className={"secondaryText"}>
                  <p>
                    Temos como princípio a prática de políticas inclusivas, além
                    de desenvolver ações para fortalecer os grupos mais expostos
                    da sociedade
                  </p>
                </div>

                <div className={"ctaButton"}>
                  <Button
                    onClick={() => cta!.scrollIntoView({ behavior: "smooth" })}
                    variant="contained"
                    color="secondary"
                  >
                    Fale conosco
                  </Button>
                </div>
              </HeroTextMainText>
            </LandingHeroTextInnerContainer>
          </LandingHeroTextContainer>
        </LandingHeroGridContainer>
      </LandingBackgroundHero>
    </div>
  )
}

export default LandingHero
