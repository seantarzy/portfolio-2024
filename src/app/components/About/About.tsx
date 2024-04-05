import React, { useContext, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import PortfolioContext, { ContextI } from "../../context/context";
import { useIsMobile } from "@/app/hooks/UseIsMobile";

const About = () => {
  const context = useContext(PortfolioContext) as ContextI;
  const { about } = context;
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } =
    about;

  const isMobile = useIsMobile();

  return (
    <section id="about">
      <Container>
        <Title title="About Sean Tarzy" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade duration={1000} delay={600} triggerOnce={true}>
              <div className="about-wrapper__image">
                <AboutImg />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              direction={isMobile ? "up" : "right"}
              duration={1000}
              delay={1000}
              triggerOnce={true}
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Sean Tarzy is a software engineer with a knack for problem solving and creativity. He currently works at Alginable doing full-stack development."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo || "Languages: Javascript, Ruby, SQL"}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "Education: Binghamton University, Flatiron School"}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour ||
                    "Hobbies: Baseball, Movies, Bass Guitar, Science-Fiction"}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
