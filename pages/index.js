import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Layout1 from '../components/layout1'
import Footer from '../components/footer'
import Toggle from '../components/toggle'

export default function Home() {
  return (
    <div>
      <Header />
      <Toggle />
      <Layout />
      <Layout1 />
      <Footer />
</div>
  )
}
