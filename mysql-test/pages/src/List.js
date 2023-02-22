import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const List = ({ data }) => {
    const router = useRouter();
    return (
        <>
            <article>
                <h2>LIST</h2>
                <ul>
                    {
                        data.map(res => {
                            return <li key={res.id}> <Link href={`/src/de/${res.id}`}>{res.id} {res.name} </Link></li>
                        })
                    }

                </ul>
            </article>
            <Link href="/src/Write"> 글쓰기 </Link>
        </>
    )
}

export default List

