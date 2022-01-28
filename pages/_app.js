import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [results, setResults] = useState(null)

  return <Component results={results} setResults={setResults} {...pageProps} />
}

export default MyApp
