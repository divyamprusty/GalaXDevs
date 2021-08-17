import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function ContactPage(){
    return (
        <div>
            <Header />
            <Contact />
            <Footer />
        </div>
    )
}