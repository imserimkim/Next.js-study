import React from 'react'
import Link from 'next/link'


const Nav = () => {


    return (
        <header>
            <nav>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/board">BOARD</Link>
            </nav>
    </header>
    )
}

export default Nav