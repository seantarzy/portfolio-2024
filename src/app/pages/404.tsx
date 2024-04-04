import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";

import { headData } from "../personal/data";
import "../style/main.scss";
import Head from "next/head";

export default () => {
  const { lang } = headData;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang={lang || "en"} />
        <meta name="description" content="Page not found" />
      </Head>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade direction="up" duration={1000} delay={500} triggerOnce={true}>
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{" "}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade direction="up" duration={1000} delay={1000} triggerOnce={true}>
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" href="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
