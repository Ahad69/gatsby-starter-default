import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using R"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
      
    </p>
<form action="">
      <label for="user">Username</label>
      <input type="text" id="user" />
      <label for="Email">Email</label>
      <input type="text" id="Email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <label for="password">Confirm Password</label>
      <input type="password" id="password" />
      <label for="phone">Phone</label>
      <input type="text" id="phone"/> 
      <input type="submit" value="Registration"/>
      </form>
  </Layout>
)

export default IndexPage
