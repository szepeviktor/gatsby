import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        remoteFile {
          ...HeroImage
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      link
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      link
    }
  }
`
