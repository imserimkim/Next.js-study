import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const Detail = () => {
    const router = useRouter();
  return (
    <div>
        <img src={`/img/${router.query.name}.jpg`} />
    </div>
  )
}

export default Detail


export async function getStaicPaths() {
    const res = await axios.get('http://localhost:3000/api')

    return {
        paths : [{params: {id:1}}],
        fallback: false,
    };
}

export async function getServerSideProps() {
    const res = await axios.get(`http://localhost:3000/api`)
    const data = res.data

    return { props: { data } }
}
