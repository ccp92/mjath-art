import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"

type AboutPageProps = {
  data: {
    allContentfulAbout: {
      edges: [
        {
          node: {
            name: string
            description: {
              description: string
            }
            profilePicture: {
              url: string
              description: string
            }
          }
        }
      ]
    }
  }
}

const AboutPage = ({ data }: AboutPageProps) => {
  const about = data.allContentfulAbout.edges[0].node
  return (
    <Layout>
      <Seo title="About" />
      <h1>About</h1>
      <h2>{about.name}</h2>
      <img
        src={about.profilePicture.url}
        alt={about.profilePicture.description}
      />
      <div
        dangerouslySetInnerHTML={{ __html: about.description.description }}
      />
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          id
          name
          description {
            description
          }
          profilePicture {
            url
            description
          }
        }
      }
    }
  }
`

export default AboutPage
