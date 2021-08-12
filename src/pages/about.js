import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import imgA from '../images/end.png';
import imgB from '../images/start.png';
import imgC from '../images/qrcode.jpg';

const AboutPage = ({ location, data }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="About" />
      <h1>About Me</h1>
      <div className="aboutstyle">
      <p><img src={imgB} alt="start" width='600' height='400'/></p>
      <p>
          안녕하세요.<br/>
          하나하나 발전해나가는 블로그입니다.
      </p>
      <p>제가 하고싶은 걸 올리거나 공부, 취미 등이 올라올 예정입니다.</p>
      <p><img src={imgA} alt="end" width="600"/></p>
      <p><img src={imgC} alt="qr" width="300"/></p>
      <p>Contact : <a href="https://github.com/1O16">github</a></p>
      </div>
    </Layout>
  )
  
  export default AboutPage
  
  export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `