import React from "react"
import { AspectRatio, Image, Heading } from "theme-ui"

export default ({ src, title }) => {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={src}
          sx={{
            objectFit: "cover",
          }}
        />
        <Heading>{title}</Heading>
      </AspectRatio>
    </>
  )
}
