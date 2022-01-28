import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components';
import { tools, paletteOptions } from '../lib/generators/toolbarGenerator';
import Image from 'next/image';
import axios from 'axios'
import { useRouter } from 'next/router';

const OptionComp = ({ label, n, setPaletteNumber}) => {
    return (
        <Option 
        onClick={() => setPaletteNumber(n, label)}
        className="option">
            {label}
        </Option>
    )
}

const Toolbar = ({setSrc, setLoading, setResults}) => {

    const [ option, setOption] = useState(false)
    const [ input, setInput ] = useState({
        src: "",
        number: "",
        type: "Select Type"
    })
    const router = useRouter()

    const isInvalid = input.src === "" || input.number === ""

    const SECRET_URL = 'https://color-detector-api.herokuapp.com/'

    const displayOption = useCallback(() => {
        setOption((state) => !state)
    }, [option])

    const setPaletteNumber = useCallback((n, label) => {
        setInput((state) => ({...state, number: n, type: label}))
        console.log(n)
    }, [input]) 

    const setImage = useCallback((event) => {
        setInput((state) => ({...state, src: event.target.files[0]}))
        setSrc(URL.createObjectURL(event.target.files[0]))
    }, [input])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isInvalid) {
            alert("Fill in both fields")
        } else {
            setLoading(true)
            const formData = new FormData()
            formData.append('img', input.src)
            formData.append('n', input.number)
            const grabColors = async () => {
                try {
                    const response = await axios({
                        method: 'post',
                        url: SECRET_URL,
                        data: formData,
                        headers: {
                            'Content-Type': 'application/form-data'
                        }
                    })

                    const resultObj = response.data.data
                    const resultArr = Object.entries(resultObj)
                    const re = resultArr.filter(item => {
                        return item[1] > 0
                    })
                    re.sort((a,b) => {
                        return b[1] - a[1]
                    })
                    console.log(re)
                    setResults(re)
                    router.push('results')
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                } catch (error) {
                    alert(error)
                    setLoading(false)
                }
            }
            grabColors()
        }
    }


    return (
        <Wrapper display = {option}>
            <form onSubmit={handleSubmit} className="tool-deck">
                <div
                className="input-wrapper">
                    <label htmlFor='img' >
                        <Image 
                        className='tool-icon'
                        src='/assets/icons/addImage.svg'
                        width={50}
                        height={50}
                        alt = 'Add Image'
                        priority
                        />
                    </label>
                    <input 
                    type='file'
                    accept='image/*'
                    name='img'
                    id='img'
                    style={{display: 'none'}}
                    onChange={setImage}
                    />
                    <div className="label">Add Image</div>
                </div>
                <div
                onClick={displayOption}
                className="input-wrapper number">
                    <Image 
                        className='tool-icon'
                        src='/assets/icons/palette.svg'
                        width={50}
                        height={50}
                        alt = 'Select type'
                        priority
                    />
                    <div className="label">{input.type}</div>
                    <div className="selection">
                        {
                            paletteOptions.map(option => (
                                <OptionComp key={option.id} setPaletteNumber={setPaletteNumber} {...option} />
                            ))
                        }
                    </div>
                </div>
                <div className="input-wrapper">
                    <button type="submit">
                        <Image 
                            className='tool-icon'
                            src='/assets/icons/process.svg'
                            width={50}
                            height={50}
                            alt = 'Process'
                            priority
                        />
                    </button>
                    <div className="label">process</div>
                </div>
            </form>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    height: 150px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;

    
    .tool {
        &-deck {
            width: 90%;
            /* height: 100%; */
            background: #faaa50fa;
            border-radius: 1rem;
            margin: 1rem 0;
            box-shadow: inset 10px 10px 20px #EBBD47, inset -10px -10px 20px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;
        }
        &-icon {
            cursor: pointer;
        }
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;

        .label {
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
        }
    }

    button[type=submit] {
        border: none;
        background: transparent;
    }

    .input-wrapper.number {
        position: relative;

        .label {
            padding-top: 0.25rem;
        }
    }


    .selection {
        width: 200px;
        /* height: 200px; */
        background: #45645567;
        position: absolute;
        bottom: 0;
        display: ${({display}) => display ? 'block' : 'none'};
        background: #F26263;
        /* background: -moz-linear-gradient(244.83deg, #F26263 54.68%, #3BC9F3 132.14%);
        background: -webkit-linear-gradient(244.83deg, #F26263 54.68%, #3BC9F3 132.14%);
        background: linear-gradient(244.83deg, #F26263 54.68%, #3BC9F3 132.14%); */
        border-radius: 1rem;
        box-shadow: inset 10px 10px 20px #F26263, inset -10px -10px 20px rgba(0, 0, 0, 0.25);
        z-index: 10;
    }

`

const Option = styled.section`
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
    user-select: none;
`

export default React.memo(Toolbar);