import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="application">
      <Helmet script={[{
        type: 'text/javascript',
        innerHTML: `
        document.addEventListener('DOMContentLoaded', function() {
          setTimeout(function() { 
          var body = document.body,
              html = document.documentElement;
  
          var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight)
        
          parent.postMessage(JSON.stringify({ subject:
          "lti.frameResize", height: height}), "*"); }, 0)} )
        `
      }]}>
      </Helmet>
    </div>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This is another Gatsby site.</p>
    <p>I'm testing how multiple sites can be hosted from the same repo.</p>
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
