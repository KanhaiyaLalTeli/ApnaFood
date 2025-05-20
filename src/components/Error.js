import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error=useRouteError();
  return (
    <div>
        <h1>OOPs error, Page not Fount</h1>
        <h2>{error.status}</h2>
    </div>
  )
}

export default Error
