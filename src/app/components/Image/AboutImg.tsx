import React from "react";
import Image from "next/image";
import SeanTarzy from "../../images/linkedInPhoto.png";
const AboutImg = () => (
  <Image src={SeanTarzy} alt={"sean tarzy"} width={400} height={400} />
);

export default AboutImg;
