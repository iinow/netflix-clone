import React, { useState, useEffect } from 'react'
import { Observable } from 'rxjs'
import '../css/Banner.css'
import { TheMovieDB } from '../config'
import { Utils } from '../common'

interface BannerProps extends React.HTMLProps<any> {
  rxMovies: Observable<any>
}

const Banner: React.FC<BannerProps> = ({ rxMovies }) => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    rxMovies.subscribe(data => {
      setMovie(data.results[Math.floor(Math.random() * data.results.length)])
    })
  }, [rxMovies])

  const getBackgroundImage = (backdropPath?: string): string => {
    if(backdropPath) {
      return TheMovieDB.IMAGE_BASE_URL + backdropPath
    }
    return ''
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${getBackgroundImage(movie?.backdrop_path)})`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {Utils.truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeButton"/>
    </header>
  )
}

export default Banner
