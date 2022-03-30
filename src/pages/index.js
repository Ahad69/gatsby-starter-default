import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Banner from "./Main/Banner/Banner"
import Slider from "./Main/Slider/Slider"
import Carosel from "./Main/Carosel/Carosel"
import Common from "./Main/Common/Common";
import Guarantee from "./Main/Guarantee/Guarantee";


const IndexPage = () => (

 

          <Layout>
              <Banner></Banner>
              <Slider></Slider>
              <Carosel></Carosel>
              <Common></Common>
              <Guarantee></Guarantee>
            </Layout>

  
)

export default IndexPage
