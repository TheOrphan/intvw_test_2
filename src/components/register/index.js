import React, { useState } from "react";
import Inputstyled from "../left-section/input.styled";
import ErrorMsg from "../left-section/error.styled";

export default function Register({ lg }) {
  const [errFname, setErrFname] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPnumber, setErrPnumber] = useState(false);
  const [errCname, setErrCname] = useState(false);
  const [valFname, setValFname] = useState("");
  const [valEmail, setValEmail] = useState("");
  const [valPnumber, setValPnumber] = useState("");
  const [valCname, setValCname] = useState("");

  function handleFname(e) {
    setErrFname(false);
    setValFname(e.target.value);
  }

  function handleEmail(e) {
    setErrEmail(false);
    setValEmail(e.target.value);
  }

  function handlePnumber(e) {
    setErrPnumber(false);
    setValPnumber(e.target.value);
  }

  function handleCname(e) {
    setErrCname(false);
    setValCname(e.target.value);
  }
  function checkValidation(e) {
    if (valFname === "") {
      setErrFname(true);
    }
    if (valEmail === "") {
      setErrEmail(true);
    }
    if (valPnumber === "") {
      setErrPnumber(true);
    }
    if (valCname === "") {
      setErrCname(true);
    }
  }
  return (
    <>
      <p>{lg.fill}</p>
      <Inputstyled>
        <input
          style={{ border: `1px solid ${errFname ? "indianred" : "#989898"}` }}
          onChange={handleFname}
          type="text"
          autoFocus
        />
        <label>{lg.fname}</label>
        <br />
        {errFname && <ErrorMsg>{lg.fnameErr}</ErrorMsg>}
      </Inputstyled>
      <Inputstyled>
        <input
          style={{ border: `1px solid ${errEmail ? "indianred" : "#989898"}` }}
          onChange={handleEmail}
          type="text"
          autoFocus
        />
        <label>{lg.email}</label>
        <br />
        {errEmail && <ErrorMsg>{lg.emailErr}</ErrorMsg>}
      </Inputstyled>
      <Inputstyled>
        <input
          style={{
            border: `1px solid ${errPnumber ? "indianred" : "#989898"}`,
          }}
          onChange={handlePnumber}
          type="text"
          autoFocus
        />
        <label>{lg.phone}</label>
        <br />
        {errPnumber && <ErrorMsg>{lg.phoneErr}</ErrorMsg>}
      </Inputstyled>
      <Inputstyled>
        <input
          style={{ border: `1px solid ${errCname ? "indianred" : "#989898"}` }}
          onChange={handleCname}
          type="text"
          autoFocus
        />
        <label>{lg.company}</label>
        <br />
        {errCname && <ErrorMsg>{lg.companyErr}</ErrorMsg>}
      </Inputstyled>
      <button onClick={checkValidation}>{lg.req_demo}</button>
    </>
  );
}
