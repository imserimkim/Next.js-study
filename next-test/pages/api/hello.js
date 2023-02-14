import '@/styles/common.scss'

export default function handler({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component />
    </>
  )
}
