import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Banner from "./Main/Banner/Banner"
import Slider from "./Main/Slider/Slider"


const IndexPage = () => (
  <Layout>
    <Banner></Banner>
    <Slider></Slider>
  </Layout>
)

export default IndexPage
