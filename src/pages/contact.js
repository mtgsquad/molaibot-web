import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact ~ MolaiBOT" />
    <h1>Contact MolaiBOT Support</h1>
    <h3>To contact molaibot support, please leave us a email here: <a href="mailto:mtgsquad@mtgsquad-dev.com">mtgsquad@mtgsquad-dev.com</a></h3>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default ContactPage
