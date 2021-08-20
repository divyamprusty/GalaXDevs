import Header from "../components/header";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Newsletter from "../components/newsletter";
import BuyNow from "../components/buynow";

export default function pricing() {
  return (
    <div>
      <title>SHOP</title>
      <Header />
      <br />
      <Pricing />
      <BuyNow />
      <div className='goToTop dark:text-white' >
          <Link href='/pricing'>GO TO TOP</Link>
        </div>
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/about" passHref>
          <FontAwesomeIcon icon={faAngleLeft} className="icon vert-move dark:text-white " />
        </Link>
        <Link className="icon-container" href="/gallery" passHref>
          <FontAwesomeIcon icon={faAngleRight} className="icon vert-move dark:text-white " />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
