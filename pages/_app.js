import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [results, setResults] = useState(null)
  const [ src, setSrc ] = useState('/assets/icons/album.svg')


  return <Component results={results} src={src} setSrc={setSrc} setResults={setResults} {...pageProps} />
}

export default MyApp
