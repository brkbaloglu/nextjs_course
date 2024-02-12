import {notFound } from "next/navigation" 
import React from 'react'


function BlogPage({searchParams}) {

    if(searchParams.test == "true"){
        notFound();
    }

    // if(searchParams.error == "true"){
    //     throw new Error("Error");
    // }

  return (
    <div>BlogPage</div>
  )
}

export default BlogPage