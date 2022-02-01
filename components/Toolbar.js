import React, {useCallback, useState } from 'react';
import styled from 'styled-components';
import { paletteOptions } from '../lib/generators/toolbarGenerator';
import Image from 'next/image';
import axios from 'axios'
import { useRouter } from 'next/router';

const OptionComp = ({ label, n, setPaletteNumber, displayOption }) => {
    return (
        <Option 
        onClick={
            (event) => {
            event.stopPropagation()
            setPaletteNumber(n, label)
            displayOption()
            }
        }
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
                    <div className="selection-deck">
                        <div className="selection">
                        {
                            paletteOptions.map(option => (
                                <OptionComp key={option.id} setPaletteNumber={setPaletteNumber} displayOption={displayOption} {...option} />
                            ))
                        }
                        </div>
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

    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;

    
    .tool {
        &-deck {
            background: #faaa50fa;
            border-radius: 1rem;
            margin: 1rem 0;
            box-shadow: inset 10px 10px 20px #EBBD47, inset -10px -10px 20px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;

            @media screen and (min-width: 330px) {
                width: 90%;
            }

            @media screen and (max-width:330px) {
                flex-direction: column;
                justify-content: center;
                align-items: space-around;

                .input-wrapper {
                    padding: 1rem 0;
                }
            }
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
        width: 48%;
        .label {
            padding-top: 0.25rem;
            text-align: center;
        }
    }


    .selection-deck {
        width: 200px;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        cursor: pointer;
        z-index: 10;
        height: ${({display}) => (display ? '160px' : '0')};
        transition: height 0.4s ease-in;
    }

    .selection {
        background: #F26263;
        border-radius: ${({display}) => (display ? '1rem' : '50%')};
        box-shadow: inset 10px 10px 20px #F26263, inset -10px -10px 20px rgba(0, 0, 0, 0.25);
        transition: all 0.4s ease-in;
        transform: ${({display}) => (display ? 'translateY(0)' : 'translateY(100%)')};
        padding: 1rem;
    }

`

const Option = styled.section`
    /* text-align: center; */
    padding: 0.5rem;
    cursor: pointer;
    user-select: none;
    font-size: 0.875rem;
`

export default React.memo(Toolbar);