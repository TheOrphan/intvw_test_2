import React from "react";
import ArrowBackStyle from "./arrow-back.styled";

export default function ArrowBack({ setCompActive, lg }) {
  return (
    <ArrowBackStyle onClick={() => setCompActive("LOGIN")}>
      &#129044; {lg.back}
    </ArrowBackStyle>
  );
}
