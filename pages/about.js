import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Layout2 from '../components/layout2'
import Footer from '../components/footer'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Header />
            <Layout2 />
            <div className='icon-container' data-aos="zoom-in" data-aos-duration='1000' >
                <Link className='icon-container' href='/' passHref><FontAwesomeIcon icon={faAngleLeft} className='icon vert-move' /></Link>
                <Link className='icon-container' href='/pricing' passHref><FontAwesomeIcon icon={faAngleRight} className='icon vert-move' /></Link>
            </div>
            <Footer />
        </div>
    )
}