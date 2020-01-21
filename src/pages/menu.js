import Layout from "../components/shared/layout"
import React from "react"
import SEO from "../components/shared/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Our Menu" />
    <div
      style={{
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        padding: "5%",
      }}
    >
      <h1>Our Menu</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus
        expedita ipsa mollitia cupiditate. Deleniti excepturi, quaerat pariatur
        sapiente assumenda saepe doloremque! Veniam sequi, atque ea magni
        accusamus ullam! Accusantium?
      </p>
    </div>
  </Layout>
)

export default MenuPage
