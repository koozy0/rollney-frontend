import About from "../components/home/about"
import Awards from "../components/home/awards"
import Contact from "../components/home/contact"
import Image from "../components/image"
import Layout from "../components/shared/layout"
import Location from "../components/home/location"
import Menu from "../components/home/menu"
import React from "react"
import SEO from "../components/shared/seo"

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div>
      <Image />
    </div>
    <About />
    <Menu />
    <Awards />
    <Location />
    <Contact />
  </Layout>
)

export default IndexPage
