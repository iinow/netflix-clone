import { default as Request } from './requests'
import { TheMovieDB } from '../config'

const fetchTrending = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/trending/all/week`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY,
      language: 'ko'
    }
  }).pipe()
}

const fetchNetflixOriginals = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/discover/tv`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY,
      language: 'ko'
    }
  })
}

const fetchTopRated = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/movie/top_rated`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY,
      language: 'ko'
    }
  })
}

const fetchActionMovies = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/discover/movie`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY
    }
  })
}

const fetchComedyMovies = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/discover/movie`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY
    }
  })
}

const fetchHorrorMovies = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/discover/movie`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY
    }
  })
}

const fetchRomanceMovies = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/movie/top_rated`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY
    }
  })
}

const fetchDocumentaries = () => {
  return Request.get(`${TheMovieDB.BASE_URL}/discover/movie`, {
    parameters: {
      api_key: TheMovieDB.APP_KEY
    }
  })
}

export default {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentaries,
  fetchHorrorMovies,
  fetchNetflixOriginals,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrending
}
