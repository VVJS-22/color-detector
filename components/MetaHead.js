import React, { useState } from 'react';
import Head from 'next/head'


const MetaHead = ({title}) => {

    return (
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    )
};

export default MetaHead;
