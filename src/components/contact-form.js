/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Label, Input, Textarea, Button, Box } from "theme-ui"

export default props => {
  return (
    <Box as="form" name="contact" method="POST" data-netlify="true">
      <Box mt={3}>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" name="name" id="name" />
      </Box>
      <Box mt={3}>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" name="email" />
      </Box>
      <Box mt={3}>
        <Label htmlFor="message">Message:</Label>
        <Textarea name="message"></Textarea>
      </Box>
      <Box mt={3}>
        <Button type="submit">Send</Button>
      </Box>
    </Box>
  )
}
