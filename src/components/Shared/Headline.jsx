import React from 'react'

function Headline(props) {
    const {icon, text} = props
  return (
    <div style={{display: "flex", alignItems: "flex-end"}}><div style={{padding: "20px 10px 7px 0"}}>{icon}</div><h4>{text}</h4></div>
  )
}

export default Headline