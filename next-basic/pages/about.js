import React from 'react'
import { useRouter } from 'next/router';
import about from '@/styles/about.module.scss';

const About = () => {
    const router = useRouter();
    console.log(router);

    function move(){
        // router.push('/board');
        router.push({
            pathname: '/board',
            query: { id:343434 }
        })
    }
    return (
        <div className={about.list}>
            about
            <button onClick={move}>게시판으로 이동💟</button>
        </div>
    )
}

export default About