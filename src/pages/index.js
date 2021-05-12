import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home ~ MolaiBOT" />
    <h1>The Multi-purpose Discord Bot Of The Future.</h1>
    <h4>MolaiBOT will be the only bot you'll have to add to your discord server, all you have to do is add it, no additional setup required.</h4>
    <h3>What features do we have?</h3>
    <ul>
      <li>Custom commands</li>
      <li>Moderation</li>
      <li>Fun</li>
    </ul>
    <h3>Don't like our current features?</h3>
    <h4>Create a new issue on our <a href="https://github.com/mtgsquad/molaibot">github</a> with what feature you'd like! Also, if you know about some library that could help us with the feature, be sure to drop it in the issue!</h4>

    <br />
    <h3>
      <Link to="https://dsc.gg/molaibot">Invite MolaiBOT</Link> <br />
    </h3>

    <h3>Links</h3>
    <ul>
      <li><a href="/contact">Contact</a></li>
      <li><a href="https://github.com/mtgsquad/molaibot">GitHub</a></li>
      <li><a href="https://dsc.gg/molaibot">Invite</a></li>
    </ul>
  </Layout>
)

export default IndexPage
