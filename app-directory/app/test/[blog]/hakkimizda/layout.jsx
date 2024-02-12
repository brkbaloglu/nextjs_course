import React from 'react'

function HakkimizdaLayout({children, ...rest}) {
    console.log(rest);
  return (
    <div>
        <div>HakkimizdaLayout</div>
        <div>{children}</div>
    </div>
  )
}

export default HakkimizdaLayout