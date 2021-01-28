import React from "react"
import AboutUs from "../components/AppComponents/AboutUs"
import DefenseSection from "../components/AppComponents/DefenseSection"
import LandingHero from "../components/AppComponents/LandingHero"
import ServiceSection from "../components/AppComponents/ServiceSection"
import TestimonialsSection from "../components/AppComponents/Testimonials"

import AppLayout from "../layout/AppLayout"
import ContactSectionAlterative from "../components/AppComponents/ContactSectionAlternative"
import { graphql, useStaticQuery } from "gatsby"
import { ConsultingService } from "../components/AppComponents/ServiceSection/Slider"

export type MenuItem = {
  menuName: string
  reference: React.RefObject<HTMLElement> | null
}

interface IndexProps {
  testMe?: Array<string>
  onceAgain?: boolean
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const landingRef = React.useRef<HTMLDivElement | null>(null!)
  const serviceRef = React.useRef<HTMLDivElement | null>(null)
  const contactRef = React.useRef<HTMLDivElement | null>(null)

  const [servicesData, setServicesData] = React.useState<ConsultingService[]>(
    []
  )

  const data = useStaticQuery(graphql`
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

  console.log(data)

  React.useEffect(() => {
    let serviceArrayLocal: Array<ConsultingService> = []

    data.allMarkdownRemark.edges.forEach((service: any) => {
      let serviceNode: ConsultingService = {
        benefits: service.node.frontmatter.benefits,
        featuredImage: service.node.frontmatter.featuredImage,
        slug: service.node.fields.slug,
        summary: service.node.frontmatter.summary,
        title: service.node.frontmatter.title,
      }

      serviceArrayLocal.push(serviceNode)
    })

    setServicesData(serviceArrayLocal)
  }, [])

  console.log(servicesData)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: landingRef,
    },

    {
      menuName: "Soluções",
      reference: serviceRef,
    },

    {
      menuName: "Contato",
      reference: contactRef,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <div ref={landingRef}>
        <LandingHero ctaRef={contactRef} ctaRefSecond={serviceRef} />
      </div>

      <div>
        <DefenseSection />
      </div>

      <div>
        <AboutUs />
      </div>

      <div id="servicos" ref={serviceRef}>
        <ServiceSection services={servicesData} />
      </div>

      <div>
        <TestimonialsSection />
      </div>

      <div id="contato" ref={contactRef}>
        {/* <ContactSection /> */}

        <ContactSectionAlterative sectionText="Contate-nos, ficaremos felizes em atendê-lo(a).  Nossa consulta é gratuita." />
      </div>
    </AppLayout>
  )
}

export default IndexPage
