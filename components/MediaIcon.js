import React from 'react';
import Image from 'next/image';

const MediaIcon = ({ url, src, alt }) => {
    return(
        <a href={url}>
            <Image src={src} alt={alt} width='25px' height='25px'/>
        </a>
    )
}


export default React.memo(MediaIcon);
