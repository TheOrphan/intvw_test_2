import React from "react";
import MottoStyled from "./motto.styled";

export default function Motto({ lg }) {
  return <MottoStyled>{lg.motto}</MottoStyled>;
}
