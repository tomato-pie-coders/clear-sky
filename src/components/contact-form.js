/** @jsx jsx */
import { jsx } from "theme-ui"
import { navigate } from "gatsby-link"
import React, { useState } from "react"
import { Label, Input, Textarea, Button, Box } from "theme-ui"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default props => {
  const [state, setState] = useState({ name: "", email: "", message: "" })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const { name, email, message } = state
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      action="/thanks"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <Box mt={3}>
        <Label htmlFor="name">Name:</Label>
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          required
        />
      </Box>
      <Box mt={3}>
        <Label htmlFor="email">Email:</Label>
        <Input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          required
        />
      </Box>
      <Box mt={3}>
        <Label htmlFor="message">Message:</Label>
        <Textarea
          onChange={handleChange}
          value={message}
          name="message"
        ></Textarea>
      </Box>
      <Box mt={3}>
        <Button type="submit">Send</Button>
      </Box>
    </Box>
  )
}
