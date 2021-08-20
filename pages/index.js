import Header from "../components/header";
import Layout from "../components/layout";
import Layout1 from "../components/layout1";
import Footer from "../components/footer";
import Reviews from "../components/reviews";
import Newsletter from "../components/newsletter";

export default function Home() {
  return (
    <div>
      <title>HOME</title>
      <Header />
      <Layout />
      <Layout1 />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}
