import React from "react"
import { Label, Input, Textarea, Button, Box } from "theme-ui"

export default ({}) => {
  return (
    <Box as="form" name="contact" method="POST" data-netlify="true">
      <Label>
        Name: <Input type="text" name="name" />
      </Label>
      <Label>
        Email: <Input type="email" name="email" />
      </Label>

      <Label>
        Message: <Textarea name="message"></Textarea>
      </Label>

      <Button type="submit">Send</Button>
    </Box>
  )
}
