import React, { useState } from "react";
import LeftSectionStyled from "./left-section.styled";
import Logo from "../logo";
import Motto from "../motto";
import Login from "../login";
import ContactUs from "../contact-us";
import Register from "../register";
import Back from "../arrow-back";

export default function LeftSection({ lg, lang }) {
  const [org, setOrg] = useState("");
  const [err, setErr] = useState(false);
  const [compActive, setCompActive] = useState("LOGIN");

  function handleOrganization(e) {
    setErr(false);
    setOrg(e.target.value);
  }

  function checkValidation(e) {
    if (org === "") {
      setErr(true);
    }
  }
  return (
    <LeftSectionStyled>
      {compActive === "REGISTER" && (
        <Back setCompActive={setCompActive} lg={lg} />
      )}
      <Logo />
      {compActive === "LOGIN" ? (
        <>
          <Motto lg={lg} />
          <Login
            lg={lg}
            err={err}
            handleOrganization={handleOrganization}
            checkValidation={checkValidation}
          />
          <ContactUs lg={lg} setCompActive={setCompActive} />
        </>
      ) : (
        <Register lg={lg} />
      )}
    </LeftSectionStyled>
  );
}
