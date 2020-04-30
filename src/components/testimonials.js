import React from "react"
import styles from "./testimonials.module.css"

class Testimonials extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.title}>Testimonials</div>
        <div className={styles.block}>
          <div className={styles.thirds} data-aos="flip-up">
            <div className={styles.container}>
              <div className={styles.chris}></div>
              <div className={styles.quote}>
                The website is very professional.
                <br />
                <span className={styles.signature}>- Chris -</span>
              </div>
            </div>
          </div>
          <div className={styles.thirds} data-aos="flip-up">
            <div className={styles.container}>
              <div className={styles.liz}></div>
              <div className={styles.quote}>
                He did such an amazing job on the website!
                <br />
                <span className={styles.signature}>- Liz -</span>
              </div>
            </div>
          </div>
          <div className={styles.thirds} data-aos="flip-up">
            <div className={styles.container}>
              <div className={styles.brenna}></div>
              <div className={styles.quote}>
                We love how our website turned out!
                <br />
                <span className={styles.signature}>- Brenna -</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
