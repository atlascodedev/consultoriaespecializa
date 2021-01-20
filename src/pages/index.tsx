import React from "react"

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
      <div ref={landingRef}>think of the children</div>

      <div ref={anotherRef}>div additional</div>

      <div ref={againRef}>another div</div>

      <div ref={andAgainRef}>and once again</div>
      <div style={{ height: "100vh" }}></div>
    </AppLayout>
  )
}

export default IndexPage
