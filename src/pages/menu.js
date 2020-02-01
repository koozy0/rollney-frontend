import IceCreamItems from "../components/menu/ice-cream-items"
import KurtosItems from "../components/menu/kurtos-items"
import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"
import SavouryItems from "../components/menu/savoury-items"
import Series from "../components/menu/series"

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
