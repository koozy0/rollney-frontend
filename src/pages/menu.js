import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"
import Series from "../components/menu/series"
import Items from "../components/menu/items"

const MenuPage = () => (
  <Layout>
    <SEO title="Our Menu" />
    <div>
      <Series />
      <Items />
    </div>
  </Layout>
)

export default MenuPage

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "5%",
  },
}
