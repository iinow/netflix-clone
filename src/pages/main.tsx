import React, { useEffect } from 'react'
import { Row } from '../components'
import { TheMovieDB } from '../service'

const Main: React.FC = () => {

  useEffect(() => {}, [])

  return (
    <div>
      <Row title={'NETFLIX ORIGINALS'} rxMovies={TheMovieDB.fetchNetflixOriginals()}/>
      <Row title={'Trending Now'} rxMovies={TheMovieDB.fetchTrending()}/>
    </div>
  )
}

export default Main
