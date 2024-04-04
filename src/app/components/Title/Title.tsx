import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ title }: { title: string }) => (
  <Fade direction="up" delay={300} triggerOnce={true}>
    <h2 className="section-title">{title}</h2>
  </Fade>
);

export default Title;
