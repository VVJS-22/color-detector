import React, { useEffect } from 'react'
import Layout from '../components/Layout1'
import Header from '../components/Header'
import { resultProps } from '../lib/generators/layoutGenerator'
import PrimeSection from '../components/PrimeSection'
import SelectedImage from '../components/SelectedImage'
import ImageViewer from '../components/ImageViewer'
import Credits from '../components/Credits'
import PaletteBox from '../components/PaletteBox'
import Palette from '../components/Palette'
import { useRouter } from 'next/router'
import MetaHead from '../components/MetaHead'


const resultBorder = {
  border: '4px solid',
  borderImageSlice: 1,
  borderImageSource: 'linear-gradient(315deg, rgba(0,0,0,0.25) 25%, #F26263 100%)'
}

const Results = ({results, src }) => {

  const router = useRouter()

  const goBack = () => {
    window.location.href = '/'
  }

  useEffect(() => {
    if (!results) {
      router.push('/')
    }
  }, [results])

  useEffect(() => {
    window.addEventListener('reload', () => {
      router.push('/')
    })
  },[])

  return (
    <>
      <MetaHead title="Results | Color Detector" />

      {
        results && <div className='page-layout'>
          <Layout>
            <PrimeSection primeGradient="#f5aa50">
              <Header {...resultProps} goBack={goBack} />
              <SelectedImage>
                <ImageViewer 
                src={src}
                styles={resultBorder}
                />
              </SelectedImage>
            </PrimeSection>
            <Credits />
            <PaletteBox>
              {
                results.map(result => (
                  <Palette 
                  key={result[0]}
                  code={result[0]} 
                  percentage={result[1]}
                  />
                ))
              }
            </PaletteBox>
          </Layout>
        </div>
      }
    </>
  )
}


export default Results