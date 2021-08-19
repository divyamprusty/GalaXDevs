import Header from '../components/header'
import Layout2 from '../components/layout2'
import Footer from '../components/footer'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Newsletter from '../components/newsletter'

export default function About() {
    return (
        <div>
        <title>ABOUT US</title>
            <Header />
            <Layout2 />
            <div className='icon-container' data-aos="zoom-in" data-aos-duration='1000' >
                <Link className='icon-container' href='/' passHref><FontAwesomeIcon icon={faAngleLeft} className='icon vert-move' /></Link>
                <Link className='icon-container' href='/pricing' passHref><FontAwesomeIcon icon={faAngleRight} className='icon vert-move' /></Link>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}