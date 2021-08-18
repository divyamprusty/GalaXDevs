import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Pricing from '../components/pricing'

export default function pricing() {
    return (
        <div>
            <Header />
            <Pricing />
            <Footer />
        </div>
    )
}