import { Fade, makeStyles, Slide } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import OffsetPictureCard from "../OffsetPictureCard"
import consultoria1 from "../../../images/especializa-1.png"

const AboutUsRoot = styled.div`
  background-color: #ececec;
  margin-bottom: 5vh;

  margin-top: 5vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
`

const AboutUsSection = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }

  & .offsetWrapper {
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
`

const AboutUsTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: "Suez One";
  align-items: center;
  text-align: center;

  & > h2 {
    font-family: "Suez One";
  }

  & > div {
    font-family: "Arial";
    text-align: start;
    width: 90%;
  }
`

interface Props {}

const AboutUs = ({}: Props) => {
  return (
    <AboutUsRoot>
      <AboutUsSection>
        <div>
          <Slide in={true} direction={"right"} timeout={{ enter: 1000 }}>
            <div
              className={"offsetWrapper"}
              style={{ position: "relative", top: "-110px" }}
            >
              <OffsetPictureCard imageUrl={consultoria1} />
            </div>
          </Slide>
        </div>

        <AboutUsTextContainer>
          <h2>Sobre nós</h2>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            accusantium facilis provident alias sequi consequatur, praesentium
            ipsam laborum voluptate delectus libero adipisci, tenetur voluptates
            beatae corporis quam ab autem architecto impedit. Voluptas
            exercitationem minima, minus earum impedit quis fuga cum expedita
            veniam eum, rem voluptatibus ipsum optio maiores dolorem enim
            voluptates, porro ad ab rerum tempore maxime aut. Quaerat, maiores
            laboriosam hic soluta aut ducimus laborum aperiam optio?
            Necessitatibus repellendus, magni inventore repudiandae illo cum
            veniam sapiente, quia aperiam reprehenderit similique libero tenetur
            culpa aliquam quisquam et officiis, explicabo molestiae. Omnis,
            quaerat amet hic pariatur officiis et obcaecati animi laborum ab
            voluptatem ullam enim nostrum, necessitatibus ut assumenda sit
            voluptatum autem doloribus dicta modi aliquam. Ex cum illo ipsa
            dolorum consequatur dolores a, corporis debitis, delectus
            repellendus libero quam suscipit, sit officiis quod quae! Soluta
            pariatur accusamus nesciunt? Aut ex minima mollitia repudiandae
            soluta quasi accusantium facilis tenetur iusto ea nisi illo illum
            nulla deleniti ipsum deserunt unde in, id accusamus quia perferendis
            qui quos? Sed nisi perspiciatis magni beatae rem nihil. Similique
            alias nulla, quod rem sapiente a facilis! Accusantium ipsam nostrum
            porro quod, mollitia, in itaque molestiae eaque necessitatibus,
            assumenda dolore. Rerum ipsam magnam laudantium perferendis
            exercitationem modi, commodi vitae quam, obcaecati facilis officia
            doloremque! Quidem blanditiis quos omnis facilis perferendis
            corporis assumenda fugit rem sunt. Tempore ipsa maiores nisi
            excepturi eveniet voluptatum officia perspiciatis, quam labore, odit
            voluptatibus tenetur necessitatibus enim earum maxime deserunt odio
            ipsam temporibus perferendis itaque rem. Delectus nihil porro
            incidunt alias, ab ad sit qui cumque ullam fugiat possimus
            assumenda, aliquam accusamus accusantium quod. Dicta aperiam magni
            animi optio obcaecati velit doloremque iusto quos repellendus,
            veritatis, accusantium nihil itaque! Quidem possimus totam
            praesentium distinctio, molestiae maxime consequuntur reprehenderit
            asperiores laborum minima. Dolor provident esse harum deserunt
            quidem asperiores accusantium architecto consectetur earum?
          </div>
        </AboutUsTextContainer>
      </AboutUsSection>
    </AboutUsRoot>
  )
}

export default AboutUs
