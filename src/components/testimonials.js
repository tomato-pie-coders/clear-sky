import React from "react"

export default ({ testimonials }) => {
  return (
    <div>
      {testimonials.map(({ node }) => {
        return (
          <div>
            <h2>{node.name}</h2>
            <p>"{node.quote}"</p>
          </div>
        )
      })}
    </div>
  )
}
