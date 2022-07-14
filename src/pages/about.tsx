import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"

type IData = {
  data: {
    allContentfulAbout: {
      edges: [
        {
          node: {
            name: string
            description: {
              description: string
            }
          }
        }
      ]
    }
  }
}

const AboutPage = ({ data }: IData) => {
  const about = data.allContentfulAbout.edges[0].node
  return (
    <Layout>
      <Seo title="About" />
      <h1>{about.name}</h1>
      <p>{about.description.description}</p>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          name
          description {
            description
          }
        }
      }
    }
  }
`

export default AboutPage
