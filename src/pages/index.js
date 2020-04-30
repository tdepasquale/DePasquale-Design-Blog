import React from "react"

import SEO from "../components/seo"
import AosSetup from "../components/aosSetup"

import CallToAction from "../components/callToAction"
import HowICanHelp from "../components/howICanHelp"
import WorkExperience from "../components/workExperience"
import Testimonials from "../components/testimonials"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "DePasquale Design"

    return (
      <React.Fragment>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `javascript`,
            `react`,
            `c#`,
            `depasquale`,
            `.net core`,
          ]}
        />
        <AosSetup />
        <CallToAction />
        <HowICanHelp />
        <WorkExperience />
        <Testimonials />
        <CallToAction />
      </React.Fragment>
    )
  }
}

export default IndexPage
