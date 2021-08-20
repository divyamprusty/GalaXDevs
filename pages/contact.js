import Header from "../components/header";
import Contact from "../components/contact";
import Footer from "../components/footer";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div>
      <title>CONTACT US</title>
      <Header />
      <Contact />
      <FAQ />
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/gallery" passHref>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon dark:text-white "
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
