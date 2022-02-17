import React,{ useEffect, useState } from 'react'
import MetaHead from '../../components/MetaHead'
import { resultProps } from '../../lib/generators/layoutGenerator'
import Layout from '../../components/Layout1'
import Header from '../../components/Header'
import PrimeSection from '../../components/PrimeSection'
import SelectedImage from '../../components/SelectedImage'
import Credits from '../../components/Credits'
import { useRouter } from 'next/router'
import Canvas from '../../components/Canvas'
import Palette from '../../components/Palette'
import Footer from '../../components/Footer'
import PickerHelp from '../../components/PickerHelp'

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

    const [ status, setStatus ] = useState({
        coord: null,
        hex: null
    })

    const getStatus = [status, setStatus]

    // useEffect(() => {
    //     if (!results) {
    //     router.push('/')
    //     }
    // }, [results])


    return (
    <>
        <MetaHead title='Results | Color Picker'/>
        {
        <div className='page-layout'>
            <Layout>
                <PrimeSection primeGradient="#f5aa50">
                <Header {...resultProps} goBack={goBack} />
                <SelectedImage>
                <Canvas
                src={src}
                styles={resultBorder}
                getStatus={getStatus}
                />
                </SelectedImage>
                </PrimeSection>
                {status.hex && <Palette 
                code={status.hex}
                style={{
                    margin: '0 auto'
                }}
                />}
                <PickerHelp />
                <Credits />
                <Footer />
            </Layout>
            </div>
        }
    </>
    )
}

export default Results