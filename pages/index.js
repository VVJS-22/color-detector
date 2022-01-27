import Head from 'next/head'
import Layout from '../components/Layout1'
import styled from 'styled-components'
import Header from '../components/Header'
import SelectedImage from '../components/SelectedImage'
import { homeProps } from '../lib/generators/layoutGenerator'
import ImageViewer from '../components/ImageViewer'
import Credits from '../components/Credits'
import PrimeSection from '../components/PrimeSection'
import Toolbar from '../components/Toolbar'


// colors: {
//   'local-yellow': '#F5AA50',
//   'local-pink': '#F26263',
//   'local-blue': '#1591D8',
//   'gradient-blue': '#3BC9F3'
// }

const headerContent = {
  title: "Color Detector"
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Color Detector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Layout>
          <PrimeSection primeGradient="#f26263">
            <Header {...homeProps} />
            <SelectedImage>
              <ImageViewer src="/assets/icons/album.svg"/>
            </SelectedImage>
          </PrimeSection>
          <Toolbar />
          <Credits />
        </Layout>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`


export default Home


