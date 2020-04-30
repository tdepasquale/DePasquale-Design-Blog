import React from "react"
import styles from "./emailForm.module.css"

class EmailForm extends React.Component {
  handleFormSubmit(event) {
    event.preventDefault() // we are submitting via xhr below
    let form = event.target

    let getFormData = function(form) {
      let elements = form.elements

      var fields = Object.keys(elements)
        .map(function(k) {
          if (elements[k].name !== undefined) {
            return elements[k].name
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name
          } else return undefined
        })
        .filter(function(item, pos, self) {
          return self.indexOf(item) === pos && item
        })

      let formData = {
        formDataNameOrder: null,
        formGoogleSheetName: null,
        formGoogleSend: null,
      }

      fields.forEach(function(name) {
        let element = elements[name]

        // singular form elements just have one value
        formData[name] = element.value

        // when our element has multiple items, get their values
        if (element.length) {
          let data = []
          for (var i = 0; i < element.length; i++) {
            let item = element.item(i)
            if (item.checked || item.selected) {
              data.push(item.value)
            }
          }
          formData[name] = data.join(", ")
        }
      })

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields)
      formData.formGoogleSheetName = form.dataset.sheet || "responses" // default sheet name
      formData.formGoogleSend = form.dataset.email || "" // no email by default

      return { data: formData }
    }

    let formData = getFormData(form)
    let data = formData.data

    let disableAllButtons = function(form) {
      let buttons = form.querySelectorAll("#button")
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
        buttons[i].innerHTML = "Processing..."
      }
    }

    disableAllButtons(form)
    let url =
      "https://script.google.com/macros/s/AKfycbwCYZHiILDaOrfJ3wZDAuH8qIr8THAthqx9QAlDhQ/exec" //url from the script in your google account
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset()
        let formElements = form.querySelector("#formElements")
        if (formElements) {
          formElements.style.display = "none" // hide form
        }
        let thankYouMessage = form.querySelector("#thankYouMessage")
        if (thankYouMessage) {
          thankYouMessage.style.display = "block"
        }
      }
    }
    // url encode form data for sending as post data
    let encoded = Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
      })
      .join("&")
    xhr.send(encoded)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} id="gform">
        <div className={styles.formElements} id="formElements">
          <input
            aria-label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email..."
            required
          ></input>

          <button type="submit" className={styles.ctaButton} id="button">
            Submit
          </button>
        </div>

        <div className={styles.thankYouMessage} id="thankYouMessage">
          Great! I'll contact you shortly.
        </div>
      </form>
    )
  }
}

export default EmailForm
