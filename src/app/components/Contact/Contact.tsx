import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import PortfolioContext, { ContextI } from "../../context/context";
import Title from "../Title/Title";

const Contact = () => {
  const context = useContext(PortfolioContext) as ContextI;
  const { contact } = context;
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade direction="up" duration={1000} delay={800} triggerOnce={true}>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || "Would you like to work with me? Awesome!"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                email
                  ? `mailto:${email}`
                  : "https://github.com/cobidev/react-simplefolio"
              }
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
