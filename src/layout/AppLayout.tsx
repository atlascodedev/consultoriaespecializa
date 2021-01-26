import React from "react"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"
import { MenuItem } from "../pages"
import logo from "../images/logo.svg"

type AppLayoutProps = {
  children: React.ReactNode
  menu?: Array<MenuItem>
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, menu }) => {
  return (
    <React.Fragment>
      <Navbar menu={menu} logo={logo} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
