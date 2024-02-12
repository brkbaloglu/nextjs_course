const fetchMovieApi = async(pathName, query = "") => {
    const res =  await fetch(`${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`)
    return res.json()
}

export {fetchMovieApi}