import React from "react";
import Dropdown from "./dropdown.styled";
import CallUs from "./call-us.styled";
import RightSectionStyled from "./right-section.styled";

export default function RightSection({ lg, lang, setLang }) {
  return (
    <RightSectionStyled>
      <Dropdown>
        {lang === "en" ? "English" : "Indonesia"}
        {lang === "in" ? (
          <div className="dropdown-content" onClick={() => setLang("en")}>
            English
          </div>
        ) : (
          <div className="dropdown-content" onClick={() => setLang("in")}>
            Indonesia
          </div>
        )}
      </Dropdown>
      <CallUs href="tel:+6281211335608">
        📞 {lg.call_us}
        <div className="phone-number">+62 812-1133-5608</div>
      </CallUs>
    </RightSectionStyled>
  );
}
