/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Label, Input, Textarea, Button, Box } from "theme-ui"

export default props => {
  return (
    <Box as="form" name="contact" method="POST" data-netlify="true">
      <Label htmlFor="name">Name:</Label>
      <Input type="text" name="name" id="name" />
      <Label htmlFor="email">Email:</Label>
      <Input type="email" name="email" />
      <Label htmlFor="message">Message:</Label>
      <Textarea name="message"></Textarea>
      <Button type="submit">Send</Button>
    </Box>
  )
}
