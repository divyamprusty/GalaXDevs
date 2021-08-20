import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";
import Link from "next/link";

export default function Features() {
  return (
    <div>
      <Header />
      <Content />
      <div className='goToTop dark:text-white' >
          <Link href='/features'>GO TO TOP</Link>
        </div>
      <Footer />
    </div>
  );
}
