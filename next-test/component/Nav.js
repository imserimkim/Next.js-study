import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <header>
        <nav>
            <Link href="/">PARADAM</Link>
            <Link href="/servies">SERVIES</Link>
            <Link href="/board">CONTACT</Link>
        </nav>
  </header>
  )
}

export default Nav