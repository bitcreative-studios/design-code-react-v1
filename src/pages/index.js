import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import tw from 'twin.macro'

const Title = tw.h1`font-sans`
function IndexPage() {
  const styles = tw`bg-gray-300 text-xl text-center`

  console.log(styles)
  return (
    <Layout>
      <SEO title="Home" />
      <Title>Hi people</Title>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
