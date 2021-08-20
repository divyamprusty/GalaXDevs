import React from "react";
import Gallery from "../components/gallery";
import Header from "../components/header";
import Footer from "../components/footer";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Newsletter from "../components/newsletter";

export default function gallery() {
  return (
    <div>
      <title>GALLERY</title>
      <Header />
      <br />
      <Gallery embedId="JLmOteqmDYc" />
      <Gallery embedId="8tjMM67-aao" />
      <Gallery embedId="0YiirWsRlQ8" />
      <div
        className="icon-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Link className="icon-container" href="/pricing" passHref>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon dark:text-white vert-move"
          />
        </Link>
        <Link className="icon-container" href="/contact" passHref>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="icon dark:text-white vert-move"
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
