import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components'; 

const Canvas = ({ src, styles, getStatus }) => {

    const canvasRef = useRef()
    const imageRef = useRef()
    const [ status, setStatus ] = getStatus

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d");
        const img = imageRef.current;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height );

        const getStatus = (e) => {
            var pos = findPos(canvas);
            var x = e.pageX - pos.x;
            var y = e.pageY - pos.y;
            var coord = "x=" + x + ", y=" + y;
            var c = canvas.getContext('2d');
            var p = c.getImageData(x, y, 1, 1).data; 
            var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
            setStatus({coord: coord, hex: hex})
        }

        canvas.addEventListener('click', getStatus)

        return () => canvas.removeEventListener('click', getStatus)
    }, [])

    const findPos = useCallback((obj) => {
        let curleft = 0, curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: curleft, y: curtop };
        }
        return undefined;
    })
    
    const rgbToHex = useCallback((r, g, b) => {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    })

    return (
        <Wrapper status={status}>

            <img ref={imageRef} src={src} alt="Retry to add image" style={styles}/>
            <canvas height="300"  ref={canvasRef} style={styles} />
        </Wrapper>
    );
};

const Wrapper = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    img {
        width: 100px;
        height: auto;
        align-self: flex-start;
        margin: 0 1rem 1rem;
    }

    canvas {
        margin: 1rem;
        cursor: url(/assets/sampleImages/round.cur), pointer;
    }

    .status {
        background-color: ${({status}) => status.hex};
        width: 30%;
        height: 65px;
        }
`

export default React.memo(Canvas);
