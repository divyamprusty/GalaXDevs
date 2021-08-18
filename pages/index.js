import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Layout1 from '../components/layout1'
import Footer from '../components/footer'
import Reviews from '../components/reviews'

export default function Home() {
  return (
    <div>
      <Header />
      <Layout />
      <Layout1 />
      <Reviews />
      <Footer />
</div>
  )
}
