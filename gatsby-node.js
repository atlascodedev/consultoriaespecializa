exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        html: String
    }

    type Frontmatter @infer {
        templateKey: String
        contentType: String
        title: String
        active: Boolean
        description: String
        body: String
        markdown: String
        phoneOne: String
        phoneTwo: String
        mailOne: String
        mailTwo: String
        instagramUrl: String
        facebookUrl: String
        whatsAppNum: String
        whatsAppMessage: String
        address: String
    }
  
  `

  createTypes(typeDefs)
}
