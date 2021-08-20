import Header from "../components/header";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import FAQ from "../components/FAQ";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <title>CONTACT US</title>
      <Header />
      <Contact />
      <FAQ />
      <div className='goToTop dark:text-white' >
          <Link href='/contact'>GO TO TOP</Link>
        </div>
      <Footer />
    </div>
  );
}
