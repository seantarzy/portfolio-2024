import React from "react";
import PropTypes from "prop-types";
import Image, { StaticImageData } from "next/image";
import BabeRuth from "../../images/babe-ruth.png";
import Mneumonic from "../../images/mneumonic.jpg";
import Bitcoin from "../../images/bitcoin-project.jpg";
import SpeedDate from "../../images/speed-dating.png";
import GenuineLeader from "../../images/genuine-leader.png";
import TeacherToCoder from "../../images/teacher-to-coder.jpg";
import SeaMonster from "../../images/sea-monster-riddle.png";
const nameToImg: Record<string, StaticImageData> = {
  "babe-ruth": BabeRuth,
  mneumonic: Mneumonic,
  "bitcoin-project": Bitcoin,
  "speed-dating": SpeedDate,
  "genuine-leader": GenuineLeader,
  "teacher-to-coder": TeacherToCoder,
  "sea-monster-riddle": SeaMonster,
};
const ProjectImg = ({
  filename,
  alt,
}: {
  filename: keyof typeof nameToImg;
  alt: string;
}) => (
  <Image
    src={nameToImg[filename]}
    alt={alt}
    width={200}
    height={200}
    className="w-full object-cover object-center rounded-lg shadow-lg"
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
