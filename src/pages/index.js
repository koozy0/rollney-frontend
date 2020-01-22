import AboutContainer from "../components/home/about/about.container"
import Banner from "../components/home/banner"
import ContactUsContainer from "../components/home/contact-us/contact-us.container"
import FindUsContainer from "../components/home/find-us/find-us.container"
import Layout from "../components/shared/layout"
import OurMenuContainer from "../components/home/our-menu/our-menu.container"
import PressAwardsContainer from "../components/home/press-awards/press-awards.container"
import React from "react"
import SEO from "../components/shared/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <AboutContainer />
    <OurMenuContainer />
    <PressAwardsContainer />
    <FindUsContainer />
    <ContactUsContainer />
  </Layout>
)

export default IndexPage
