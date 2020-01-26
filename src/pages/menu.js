import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"
import Series from "../components/menu/series"
import KurtosItems from "../components/menu/kurtos-items"
import IceCreamItems from "../components/menu/ice-cream-items"
import SavouryItems from "../components/menu/savoury-items"

const MenuPage = () => (
  <Layout>
    <SEO title="Our Menu" />
    <div>
      <Series />
      <KurtosItems />
      <IceCreamItems />
      <SavouryItems />
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
