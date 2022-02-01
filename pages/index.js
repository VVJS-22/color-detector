import MetaHead from '../components/MetaHead'
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
import { useState, useEffect, useMemo } from 'react'
import Navbar from '../components/Navbar'


// colors: {
//   'local-yellow': '#F5AA50',
//   'local-pink': '#F26263',
//   'local-blue': '#1591D8',
//   'gradient-blue': '#3BC9F3'
// }


const Home = ({setResults, setSrc, src}) => {

  const [ loading, setLoading ] = useState(true)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ hide, setHide ] = useState(false)


  useMemo(() => {
    setTimeout(() => {
      isOpen && setHide(true)
    }, 400)

    isOpen || setHide(false)
  }, [isOpen])


  useEffect(() => {
    setSrc('/assets/icons/album.svg')
    setResults(null)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      <MetaHead />

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
            <Header {...homeProps} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SelectedImage>
              <ImageViewer src={src} />
            </SelectedImage>
          </PrimeSection>
          { hide || <>
          <Credits />
          <Toolbar setSrc={setSrc} setLoading={setLoading}setResults={setResults}/>
          <Footer />
          </>}
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


