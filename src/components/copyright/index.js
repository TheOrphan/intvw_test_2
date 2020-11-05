import React from "react";
import CopyrightStyled from "./copyright.styled";

export default function Copyright({ lg, lang, setLang }) {
  return <CopyrightStyled>{lg.copy}</CopyrightStyled>;
}
