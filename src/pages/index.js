import AboutContainer from "../components/home/about.container"
import AwardsContainer from "../components/home/awards.container"
import Banner from "../components/home/banner"
import Contact from "../components/home/contact"
import FindUsContainer from "../components/home/find-us.container"
import Layout from "../components/shared/layout"
import Menu from "../components/home/menu"
import React from "react"
import SEO from "../components/shared/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <AboutContainer />
    <Menu />
    <AwardsContainer />
    <FindUsContainer />
    <Contact />
  </Layout>
)

export default IndexPage
