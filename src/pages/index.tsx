import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexProps {
  testMe?: Array<string>
  onceAgain?: boolean
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => (
  <div>stop</div>
)

export default IndexPage
