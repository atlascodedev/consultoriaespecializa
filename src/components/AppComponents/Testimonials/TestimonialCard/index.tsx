import React from "react"
import styled from "styled-components"

const TestimonialCardRoot = styled("div")`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 330px;
  height: 326px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  background-color: #fff;
  position: relative;
`

interface TestimonialCardImageProps {
  img?: string
}

const TestimonialCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
`

const TestimonialCardImage = styled("div")<TestimonialCardImageProps>`
  background: #78e08f;
  border-radius: 4px;
  width: 108px;
  height: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const TestimonialCardTitle = styled("div")`
  text-align: center;
  font-family: "Suez One";
  font-weight: 700;
  font-size: 16px;
`

const TestimonialBody = styled("div")`
  font-size: 13px;
  padding: 20px;
  text-align: center;
`

interface Props {
  cardImage?: string
  cardTitle?: string
  cardText?: string
}

const TestimonialCard = ({
  cardImage = "https://via.placeholder.com/75x75",
  cardTitle = "Nome para depoimento",
  cardText = "Depoimento vai aqui, lorem ipsum text para simular um depoimento que será inserido através de um painel de controle amigável ao usuário",
}: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TestimonialCardRoot>
        <TestimonialCardImageContainer>
          <TestimonialCardImage img={cardImage} />
        </TestimonialCardImageContainer>
        <TestimonialCardTitle>{cardTitle}</TestimonialCardTitle>
        <TestimonialBody>{cardText}</TestimonialBody>
      </TestimonialCardRoot>
    </div>
  )
}

export default TestimonialCard
