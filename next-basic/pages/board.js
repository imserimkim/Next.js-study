import React from 'react'
import { useRouter } from 'next/router';

const Board = () => {
    const { query } = useRouter()
    console.log(query.id)

    [id].js

    return (
        <div>보드입니다. ✏</div>
    )
}

export default Board