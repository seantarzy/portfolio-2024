import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import PortfolioContext, { ContextI } from "../../context/context";
import { useIsMobile } from "@/app/hooks/UseIsMobile";
import AlignableLogo from "../../images/alignable-logo.png";
import Image from "next/image";

const Header = () => {
  const context = useContext(PortfolioContext) as ContextI;
  const { hero } = context;
  const { title, name, subtitle, cta } = hero;

  const isMobile = useIsMobile();

  return (
    <section id="hero" className="jumbotron">
      {name ? (
        <Container>
          <Fade
            triggerOnce={true}
            direction={isMobile ? "up" : "left"}
            duration={1000}
            delay={500}
          >
            <div className="flex gap-4 items-center">
              <div className="md:mb-6 mb-[40px]">
                <Image
                  src={AlignableLogo}
                  alt="Alignable Logo"
                  width={isMobile ? 30 : 100}
                  height={50}
                />
              </div>
              <h1 className="hero-title">
                {title || "Hi, my name is"}{" "}
                <span className="text-color-main">{name || "Sean Tarzy"}</span>
                <br />
                {subtitle || "I'm a full-stack Developer at Alginable."}
              </h1>
            </div>
          </Fade>
          <Fade
            triggerOnce={true}
            direction={isMobile ? "up" : "left"}
            duration={1000}
            delay={1000}
          >
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || "Know more"}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      ) : null}
    </section>
  );
};

export default Header;
