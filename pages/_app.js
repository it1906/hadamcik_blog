import React, {useEffect, useState} from 'react'
import { SessionProvider } from "next-auth/react"
import { Layout } from '../components'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
