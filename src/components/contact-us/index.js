import React from "react";
import ContactUsStyled from "./contact-us.styled";

export default function ContactUs({ lg, setCompActive }) {
  return (
    <ContactUsStyled>
      {lg.not_registered}{" "}
      <span onClick={() => setCompActive("REGISTER")}>{lg.contact_us}</span>{" "}
      {lg.more_info}
    </ContactUsStyled>
  );
}
