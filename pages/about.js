import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Toggle from '../components/toggle'
import Layout2 from '../components/layout2'
import Footer from '../components/footer'

export default function About() {
    return (
        <div>
            <Header />
            <Toggle />
            <Layout2 />
            <Footer />
        </div>
    )
}