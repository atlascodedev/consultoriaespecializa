const { convertToSlug } = require("./nodeHelper/convertToSlug")
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        html: String
        fields: Fields
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

    type Fields {
      slug: String
    }
  
  `

  createTypes(typeDefs)
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  store,
  cache,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log(node)

    if (node.frontmatter.contentType === "servicePost") {
      let servicePostTitle = convertToSlug(node.frontmatter.title)

      servicePostTitle.toLowerCase()

      let servicePostSlug = `/servicos/${servicePostTitle}`

      createNodeField({
        name: "slug",
        value: servicePostSlug,
        node,
      })
    }
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentType: { eq: "servicePost" } } }
      ) {
        edges {
          node {
            frontmatter {
              benefits {
                benefitDescription
                benefitName
              }
              contentType
              featuredImage
              summary
              title
              templateKey
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const servicePosts = result.data.allMarkdownRemark.edges

      console.log(servicePosts)

      servicePosts.forEach(edge => {
        if (
          edge.node.frontmatter.templateKey == null ||
          edge.node.frontmatter.templateKey == undefined
        ) {
          console.log("FUUUUUUUUUUUUUUUUUUUUUUUUCK")

          return
        } else {
          console.log(edge.node, "edgyyyyyyy")
          const frontMatterNode = edge.node.frontmatter

          const id = edge.node.id
          const templateKey = frontMatterNode.templateKey
          const contentType = frontMatterNode.contentType
          const title = frontMatterNode.title
          const featuredImage = frontMatterNode.featuredImage
          const summary = frontMatterNode.summary
          const benefits = frontMatterNode.benefits
          const html = edge.node.html
          const slug = edge.node.fields.slug

          createPage({
            path: slug,
            component: path.resolve(`src/templates/${String(templateKey)}.tsx`),
            context: {
              id: id,
              templateKey: templateKey,
              contentType: contentType,
              title: title,
              featuredImage: featuredImage,
              summary: summary,
              benefits: benefits,
              html: html,
              slug: slug,
            },
          })
        }
      })
    })
    .catch(error => {
      console.error("Damn there was an error", error)
    })
}
