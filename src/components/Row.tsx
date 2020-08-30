import React, { useState, useEffect } from 'react'
import { Observable } from 'rxjs'
import { TheMovieDB } from '../config'
import '../css/Row.css'
import YouTube, { Options } from 'react-youtube'
//@ts-ignore
import movieTrailer from 'movie-trailer'
import { from } from 'rxjs'

interface RowProps extends React.HTMLProps<any> {
  title: string
  rxMovies: Observable<any>
  isLargeRow?: boolean
}

const Row: React.FC<RowProps> = ({ title, rxMovies, isLargeRow }) => {
  const [movies, setMovies] = useState(new Array<any>())
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    rxMovies.subscribe(data => setMovies(data.results))
  }, [rxMovies])

  const opts: Options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie: any) => {
    if(trailerUrl) {
      setTrailerUrl('')
    } else {
      from(movieTrailer(movie?.original_name || '', {
        year: ''
      }))
        .subscribe((url) => {
          //@ts-ignore
          const urlParams = new URLSearchParams(new URL(url).searchParams)
          setTrailerUrl(urlParams.get('v') || '')
        })
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${TheMovieDB.IMAGE_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
