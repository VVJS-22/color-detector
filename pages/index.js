import Head from 'next/head'
import Layout from '../components/Layout1'
import styled from 'styled-components'
import Header from '../components/Header'
import SelectedImage from '../components/SelectedImage'
import { homeProps } from '../lib/generators/layoutGenerator'
import ImageViewer from '../components/ImageViewer'
import Footer from '../components/Footer'
import PrimeSection from '../components/PrimeSection'
import Toolbar from '../components/Toolbar'
import Credits from '../components/Credits'
import { HashLoader } from 'react-spinners'
import { useState, useEffect } from 'react'


// colors: {
//   'local-yellow': '#F5AA50',
//   'local-pink': '#F26263',
//   'local-blue': '#1591D8',
//   'gradient-blue': '#3BC9F3'
// }

const headerContent = {
  title: "Color Detector"
}

const Home = ({setResults, setSrc, src}) => {

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setSrc('/assets/icons/album.svg')
    setResults(null)
  }, [])

  return (
    <>
      <Head>
        <title>Home | Color Detector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { loading 
            ?
            <div className="loader-flex">
                <HashLoader 
                color="#3BC9F3" 
                loading={loading} 
                size={80} />
            </div> 
            :  
      <Wrapper>
        <Layout>
          <PrimeSection primeGradient="#f26263">
            <Header {...homeProps} />
            <SelectedImage>
              <ImageViewer src={src} />
            </SelectedImage>
          </PrimeSection>
          <Credits />
          <Toolbar setSrc={setSrc} setLoading={setLoading}setResults={setResults}/>
          <Footer />
        </Layout>
      </Wrapper> 
      }
    </>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: #ffffff;
`


export default Home


