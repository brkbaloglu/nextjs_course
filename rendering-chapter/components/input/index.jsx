"use client";
import React from 'react'

function Input({children}) {
   React.useEffect(() => {
    console.log("Input");
   })
  return (
    <div>Input
      {children}
    </div>
  )
}

export default Input