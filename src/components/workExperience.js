import React from "react"
import styles from "./workExperience.module.css"

class WorkExperience extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.title}>
          Examples of my Work
          <p className={styles.subtitle}>
            Click an image to visit the website.
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.thirds}>
            <a
              href="https://radxrays.com"
              target="blank"
              aria-label="https://radxrays.com"
              className={styles.workOne}
            >
              {" "}
            </a>
          </div>
          <div className={styles.thirds}>
            <a
              href="https://www.quickgameguides.com"
              target="blank"
              aria-label="https://www.quickgameguides.com"
              className={styles.workTwo}
            >
              {" "}
            </a>
          </div>
          <div className={styles.thirds}>
            <a
              href="https://brenna-chris.netlify.com"
              target="blank"
              aria-label="https://brenna-chris.netlify.com"
              className={styles.workThree}
            >
              {" "}
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkExperience
