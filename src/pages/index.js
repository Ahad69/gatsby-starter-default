import * as React from "react"
import Layout from "../components/layout"
import Banner from "./Main/Banner/Banner"
import Slider from "./Main/Slider/Slider"
import Carosel from "./Main/Carosel/Carosel"


const IndexPage = () => (
  <Layout>
    <Banner></Banner>
    <Slider></Slider>
    <Carosel></Carosel>
  </Layout>
)

export default IndexPage
