import React, { useEffect } from 'react'
import { Row, Banner, Nav } from '../components'
import { TheMovieDB } from '../service'

const Main: React.FC = () => {
  useEffect(() => {}, [])

  return (
    <div>
      <Nav />
      <Banner rxMovies={TheMovieDB.fetchNetflixOriginals()} />
      <Row
        title={'NETFLIX ORIGINALS'}
        rxMovies={TheMovieDB.fetchNetflixOriginals()}
        isLargeRow
      />
      <Row title={'Trending Now'} rxMovies={TheMovieDB.fetchTrending()} />
      <Row title={'Top Rated'} rxMovies={TheMovieDB.fetchTopRated()} />
      <Row title={'Action Movies'} rxMovies={TheMovieDB.fetchActionMovies()} />
      <Row title={'Horror Movies'} rxMovies={TheMovieDB.fetchHorrorMovies()} />
      <Row
        title={'Romance Movies'}
        rxMovies={TheMovieDB.fetchRomanceMovies()}
      />
      <Row title={'Documentaries'} rxMovies={TheMovieDB.fetchDocumentaries()} />
    </div>
  )
}

export default Main
