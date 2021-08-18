import Header from '../components/header'
import Footer from '../components/footer'
import Pricing from '../components/pricing'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function pricing() {
    return (
        <div>
            <Header />
            <Pricing />
            <div className='icon-container' data-aos="zoom-in" data-aos-duration='1000' >
                <Link className='icon-container' href='/about' passHref><FontAwesomeIcon icon={faAngleLeft} className='icon vert-move' /></Link>
                <Link className='icon-container' href='/gallery' passHref><FontAwesomeIcon icon={faAngleRight} className='icon vert-move' /></Link>
            </div>
            <Footer />
        </div>
    )
}