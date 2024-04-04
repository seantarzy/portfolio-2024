import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tilt } from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext, { ContextI } from "../../context/context";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";
import { useIsMobile } from "@/app/hooks/UseIsMobile";

const Blogs = () => {
  const context = useContext(PortfolioContext) as ContextI;
  const { blogs } = context;

  const isMobile = useIsMobile();

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Blogs" />
          {blogs.map((blog) => {
            const { title, info, info2, url, img, id } = blog;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade duration={1000} delay={200} triggerOnce={true}>
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {title || "Project Title"}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                        </p>
                        <p className="mb-4">{info2 || ""}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || "#!"}
                      >
                        See Live
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    direction={isMobile ? "up" : "right"}
                    duration={1000}
                    delay={1000}
                    triggerOnce={true}
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
