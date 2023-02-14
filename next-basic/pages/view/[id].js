import { useRouter } from 'next/router';
import React from "react";

const Test = () => {
    const router = useRouter()
    return (
        <div>
            파라미터값을 받아 처리하는 문서...보다<br></br>
            짱인건 민서
        </div>
    )
}

export default Test;