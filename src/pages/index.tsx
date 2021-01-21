import React from "react"
import AboutUs from "../components/AppComponents/AboutUs"
import DefenseSection from "../components/AppComponents/DefenseSection"
import LandingHero from "../components/AppComponents/LandingHero"
import ServiceSection from "../components/AppComponents/ServiceSection"

import AppLayout from "../layout/AppLayout"

export type MenuItem = {
  menuName: string
  reference: React.RefObject<HTMLElement>
}

interface IndexProps {
  testMe?: Array<string>
  onceAgain?: boolean
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const landingRef = React.useRef<HTMLDivElement | null>(null!)
  const anotherRef = React.useRef<HTMLDivElement | null>(null)
  const againRef = React.useRef<HTMLDivElement | null>(null)
  const andAgainRef = React.useRef<HTMLDivElement | null>(null)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: landingRef,
    },
    {
      menuName: "Another",
      reference: anotherRef,
    },
    {
      menuName: "Again",
      reference: againRef,
    },

    {
      menuName: "andAgain",
      reference: andAgainRef,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <div ref={landingRef}>
        <LandingHero ctaRef={landingRef} />
      </div>

      <div ref={anotherRef}>
        <DefenseSection />
      </div>

      <div ref={againRef}>
        <AboutUs />
      </div>

      <div ref={andAgainRef}>
        <ServiceSection />
      </div>
    </AppLayout>
  )
}

export default IndexPage
