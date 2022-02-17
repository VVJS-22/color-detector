import dynamic from 'next/dynamic';
import MetaHead from '../components/MetaHead'
import Layout from '../components/Layout1'
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
import TypeDesc from '../components/TypeDesc'
import { description } from '../lib/generators/typeDescription'


const DynamicTypeTutor = dynamic(() => import('../components/TypeTutor'), {
  loading: () => <p>loading...</p>
})


// colors: {
//   'local-yellow': '#F5AA50',
//   'local-pink': '#F26263',
//   'local-blue': '#1591D8',
//   'gradient-blue': '#3BC9F3'
// }


const Home = ({setResults, setSrc, src}) => {

  const [ loading, setLoading ] = useState(false)
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
      <MetaHead title="Home | Color Detector" />

      { loading 
            ?
            <div className="loader-flex">
                <HashLoader 
                color="#3BC9F3" 
                loading={loading} 
                size={80} />
            </div> 
            : 
      <div className='page-layout'>
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
          <TypeDesc>
            {
              description.map(item => (
                <DynamicTypeTutor 
                key={item.id}
                title={item.title}
                slug={item.slug}
                description={item.description}
                />
              ))
            }
          </TypeDesc>
          <Footer />
          </>}
        </Layout>
      </div> 
      }
    </>
  )
}

export default Home


