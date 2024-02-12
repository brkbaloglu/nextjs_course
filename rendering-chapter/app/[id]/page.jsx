import React from 'react'


export const getAllPosts = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/posts")
  return (await res).json()
}

export const getSinglePost = async (id) => {
  const res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return (await res).json()
}


async function BlogPage({params}) {

  const data = await getSinglePost(params.id)
  console.log(params.id);
  return (
    <div>
      <h1>Title: {data.title}</h1>
    </div>
  )
}

export default BlogPage

export async function generateStaticParams(){
  console.log("Inside generateStaticParams");
  const posts = await getAllPosts()
  return posts.map((post) => {id: `${post.id}`})
}