import React from "react"
import DefenseCard from "../DefenseCard"
import styled from "styled-components"
import { Check, CreditCard, Facebook } from "@material-ui/icons"

const DefenseSectionRoot = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`

const DefenseSectionTitle = styled("h2")`
  font-family: "Suez One";
  margin-top: 10vh;
  color: #333;
  text-rendering: optimizeLegibility;
  font-size: 35px;
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
  return (
    <DefenseSectionRoot>
      <DefenseSectionTitle>
        Por que escolher a <span>Consultoria Especializa</span>?
      </DefenseSectionTitle>
      <DefenseSectionContainer>
        <DefenseCard
          icon={CreditCard}
          text={"Text through prop"}
          title={"Preço"}
        />
        <DefenseCard
          icon={Check}
          text={"Placeholder it just feels right"}
          title={"Right choice"}
        />
        <DefenseCard
          icon={Facebook}
          text="Tuts tuts placeholder"
          title="Social"
        />
      </DefenseSectionContainer>
    </DefenseSectionRoot>
  )
}

export default DefenseSection
