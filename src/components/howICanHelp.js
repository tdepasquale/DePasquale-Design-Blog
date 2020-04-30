import React from "react"
import styles from "./howICanHelp.module.css"
import Helmet from "react-helmet"

class HowICanHelp extends React.Component {
  render() {
    return (
      <section className={styles.container}>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/40f72fedbc.js"
            crossorigin="anonymous"
            SameSite="none"
            Secure
          />
        </Helmet>
        <div className={styles.sectionLeft}>
          <h2 className={styles.sectionTitle}>I can help by...</h2>

          <p className={styles.green} data-aos="fade-right">
            <i className="fas fa-funnel-dollar"></i>
            <br />
            <span className={styles.text}>
              Improving user experience to increase sales.
            </span>
          </p>
          <p className={styles.purple} data-aos="fade-left">
            <i className="fas fa-user-tie"></i>
            <br />
            <span className={styles.text}>
              Building a professional website with React and .Net Core.
            </span>
          </p>
          <p className={styles.green} data-aos="fade-right">
            <i className="fas fa-chart-line"></i>
            <br />
            <span className={styles.text}>
              Increasing your rank on Google to direct customers to you.
            </span>
          </p>
        </div>
        <div className={styles.sectionRight}></div>
      </section>
    )
  }
}

export default HowICanHelp
