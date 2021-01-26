import React from "react"
import AppLayout from "../layout/AppLayout"
import { MenuItem } from "../pages"

const Post: React.FC<any> = ({ pageContext }) => {
  console.log(pageContext)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: null,
    },

    {
      menuName: "Soluções",
      reference: null,
    },

    {
      menuName: "Contato",
      reference: null,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <div>blulbulub</div>
    </AppLayout>
  )
}

export default Post
