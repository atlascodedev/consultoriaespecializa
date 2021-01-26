import React from "react"
import styled from "styled-components"
import ContactFormMain from "../ContactForm"
import contactBg from "../../../images/contact-bg.png"
import pattern from "../../../images/pattern-behind.svg"
import { useMediaQuery } from "@material-ui/core"

interface Props {}

const ContactSectionBase = styled.div`
  background-color: #4c58a4;
  overflow: hidden;
  padding-top: 5vh;
`

const ContactSectionBaseInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`

const ContactSectionPictureContainer = styled.div`
  height: 600px;
  width: fit-content;
  transform: rotateY(180deg);
  position: absolute;
  bottom: 0;
  left: 10%;

  @media (min-width: 1024px) {
  }
`

const ContactSectionPicture = styled.img`
  height: 100%;
  width: 100%;
`

const ContactSectionPictureBehind = styled.img`
  opacity: 0.9;
  filter: blur(50px);
  position: absolute;
  bottom: 0;
  left: 7%;
`

const ContactSectionTextContainer = styled.div`
  color: #fff;
  font-family: "Suez One";
  font-size: 23px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding-bottom: 5vh;
  padding-top: 5vh;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 1024px) {
    font-size: 30px;
    padding-bottom: 10vh;
  }
`

const ContactSectionAlterative = (props: Props) => {
  const bigDevice = useMediaQuery("@media(min-width: 1024px)")

  return (
    <React.Fragment>
      {bigDevice ? (
        <ContactSectionBase>
          <ContactSectionTextContainer>
            {
              "Contate-nos, ficaremos felizes em atendê-lo(a).  Nossa consulta é gratuita."
            }
          </ContactSectionTextContainer>

          <ContactSectionBaseInner>
            <ContactSectionPictureBehind src={pattern} />

            <ContactSectionPictureContainer>
              <ContactSectionPicture src={contactBg} />
            </ContactSectionPictureContainer>
            <span></span>

            <ContactFormMain />
          </ContactSectionBaseInner>
        </ContactSectionBase>
      ) : (
        <ContactSectionBase>
          <ContactSectionTextContainer>
            {
              "Contate-nos, ficaremos felizes em atendê-lo(a).  Nossa consulta é gratuita."
            }
          </ContactSectionTextContainer>

          <ContactFormMain />
        </ContactSectionBase>
      )}
    </React.Fragment>
  )
}

export default ContactSectionAlterative
