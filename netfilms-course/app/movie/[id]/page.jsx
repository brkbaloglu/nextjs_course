import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'


// async function delay(ms){
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }


const API_URL = "https://api.themoviedb.org/3"


const getMovie = async (movieId) => {
  const res = fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`)
  return (await res).json()
}


async function MoviePage({params, searchParams}) {
  // await delay(3000)
  const movieDetail = await getMovie(params.id)


  if(!movieDetail){
    notFound();
  }

  if(searchParams.error === "true"){
    throw new Error("Error");
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
}

export default MoviePage