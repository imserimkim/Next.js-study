import React from "react";
import Head from 'next/head'

const HeadMeta = ({title}) => {
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadMeta