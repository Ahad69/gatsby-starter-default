/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
      
      >
        <main>{children}</main>
        <footer
          style={{
            
          }}
        >
         <div class="footer pt-5 pb-3 container">
         <p>*Offer valid only at participating locations. Single-family dwelling units only. Valid up to 3,999 square feet. Requires purchase of a new annual residential pest control plan. Offer may not be combined with other offers, bundled service offerings or discounts. Offer not valid for Cockroach Treatment Plan. Service frequency will vary based on geography and type of target pest. AutoPay is required to redeem this offer. Additional limitations apply. Not valid for existing pest control customers. Offer expires 3/31/2022.
          <br />
          <br />
          ** Standard Covered Pests: cockroaches, mice, rats, silverfish, “house” ants (excluding carpenter ants, fire ants, pharaoh ants and tawny crazy ants), clothes moths, spiders (excluding black widow and brown recluse spiders), scorpions, centipedes, millipedes, earwigs, house crickets and paper wasps. Other pests not specified as Standard Covered Pests may be covered for an additional charge or under other plans.
          <br />
          <br />
          † Treatments and Covered Pests defined in your Plan. Limitations apply. See Plan for details
          <br />
          <br />
          Privacy Policy | Terms and Conditions
          <br />
          <br />
          HouseMethod.com is an authorized retailer of Terminix® and powered by Home Media LLC. © 2022 Terminix. All rights reserved. All other marks are the property of their respective owners.
          <br />
          <br />
          License: 0462, 0146, 0471, 0498, 0526, 0545, 1573, 0151, 1590, 4413, 0062, 4631, 118, 06085, 07471, 09015, 09564, 04983, 73600, 02823, 13429, 12395, 16671, 4008, 9114, 4000-377. PCO Lic#618. Charter: #B0219, #B0215.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
