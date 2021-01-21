import React from "react"
import DefenseCard from "../DefenseCard"
import styled from "styled-components"
import { Check, CreditCard, Facebook } from "@material-ui/icons"
import { Fade, Slide, useMediaQuery } from "@material-ui/core"
import { Waypoint } from "react-waypoint"

const DefenseSectionRoot = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  overflow: hidden;
`

const DefenseSectionTitle = styled("h2")`
  font-family: "Suez One";
  margin-top: 10vh;
  color: #333;
  text-rendering: optimizeLegibility;
  font-size: 30px;
`

const DefenseSectionContainer = styled("div")`
  margin-top: 5vh;
  margin-bottom: 10vh;

  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

interface Props {}

const DefenseSection = (props: Props) => {
  const [defenseAnimation, setDefenseAnimation] = React.useState<boolean>(false)
  const isBigDevice = useMediaQuery("(min-width: 1024px)")

  const deviceSize = isBigDevice ? 400 : 400

  return (
    <div>
      <Waypoint
        bottomOffset={deviceSize}
        onEnter={() => setDefenseAnimation(true)}
      />
      <DefenseSectionRoot>
        <DefenseSectionTitle>
          Por que escolher a <span>Consultoria Especializa</span>?
        </DefenseSectionTitle>
        <DefenseSectionContainer>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 750 }}
          >
            <div>
              <DefenseCard
                icon={CreditCard}
                text={"Text through prop"}
                title={"Preço"}
              />
            </div>
          </Slide>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 950 }}
          >
            <div>
              <DefenseCard
                icon={CreditCard}
                text={"Text through prop"}
                title={"Preço"}
              />
            </div>
          </Slide>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 1150 }}
          >
            <div>
              <DefenseCard
                icon={CreditCard}
                text={"Text through prop"}
                title={"Preço"}
              />
            </div>
          </Slide>
        </DefenseSectionContainer>
      </DefenseSectionRoot>
    </div>
  )
}

export default DefenseSection
