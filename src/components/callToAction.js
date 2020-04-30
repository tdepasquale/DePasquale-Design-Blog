import React from "react"
import styles from "./callToAction.module.css"
import EmailForm from "./emailForm"

class CallToAction extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            DePasquale
            <br />
            Design
          </h1>
          <div className={styles.ctaText} data-aos="zoom-in">
            Want more customers?
          </div>
          <div className={styles.ctaSubtext}>
            Enter your email below if you want to get more business online.
          </div>
          <EmailForm />
        </div>
      </section>
    )
  }
}

export default CallToAction
