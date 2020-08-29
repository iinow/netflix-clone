import React, { useState, useEffect } from 'react'
import { Observable } from 'rxjs'
import '../css/Row.css'

interface RowProps extends React.HTMLProps<any> {
  title: string
  rxMovies: Observable<any>
}

const Row: React.FC<RowProps> = ({ title, rxMovies }) => {
  const [movies, setMovies] = useState(new Array<any>())

  useEffect(() => {
    rxMovies.subscribe(data => setMovies(data.results))
  }, [rxMovies])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__poster">
        {
          movies.map((movie, index) => (
            <img src={movie?.poster_path} alt={movie.name} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Row
