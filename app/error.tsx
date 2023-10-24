'use client'
import Error from 'next/error'
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

// consider using sentry for error logging
// client component to handle reset event

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error)
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className='btn' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage