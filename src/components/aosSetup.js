import React from "react"
import Helmet from "react-helmet"
import AOS from "aos"

class AosSetup extends React.Component {
  componentDidMount() {
    AOS.init({ duration: 1500, delay: 100 })
  }

  render() {
    return (
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Helmet>
    )
  }
}

export default AosSetup
