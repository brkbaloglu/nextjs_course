import React from 'react'

function TestLayout({children}) {
  return (
    <div>
        <div>TestLayout</div>
        <div>{children}</div>
    </div>
  )
}

export default TestLayout