import React from "react";
import Inputstyled from "../left-section/input.styled";
import ErrorMsg from "../left-section/error.styled";

export default function Login({
  lg,
  err,
  handleOrganization,
  checkValidation,
}) {
  return (
    <>
      <Inputstyled>
        <input
          style={{ border: `1px solid ${err ? "indianred" : "#989898"}` }}
          onChange={handleOrganization}
          type="text"
          autoFocus
        />
        <label>{lg.organization}</label>
        <br />
        {err && <ErrorMsg>{lg.organizationErr}</ErrorMsg>}
        <button onClick={checkValidation}>{lg.login}</button>
      </Inputstyled>
    </>
  );
}
