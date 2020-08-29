import { from, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { flatMap } from 'rxjs/internal/operators'

type RequestObject = { [key: string]: any }

function get(url: string, { parameters }: { parameters?: RequestObject } = {}) {
  return call('GET', url, { parameters })
}

function post(
  url: string,
  { body, parameters }: { body?: RequestObject; parameters?: RequestObject } = {}
) {
  return call('POST', url, { body, parameters })
}

function put(
  url: string,
  { body, parameters }: { body?: RequestObject; parameters?: RequestObject } = {}
) {
  return call('PUT', url, { body })
}

function call(
  method: string,
  url: string,
  { body, parameters }: { body?: RequestObject; parameters?: RequestObject } = {}
) {
  if (parameters) {
    url = `${url}?${createQueryParameters(parameters)}`
  }
  return from(
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  ).pipe(
    flatMap(data => {
      return data.text()
    }),
    map(data => {
      try {
        return JSON.parse(data)
      } catch (e) {
        return data
      }
    }),
    catchError(e => {
      console.error(`ERROR HTTP API: ${e}`)
      return throwError(e)
    })
  )
}

function createQueryParameters(parameter: RequestObject) {
  return Object.keys(parameter)
    .map(
      key => encodeURIComponent(key) + '=' + encodeURIComponent(parameter[key])
    )
    .join('&')
}

export default {
  call,
  get,
  post,
  put
}
