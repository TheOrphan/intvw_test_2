import React, { useState, useEffect } from "react";
import "./style.css";
import LeftSection from "./components/left-section";
import RightSection from "./components/right-section";
import Copyright from "./components/copyright";
import en from "./config/en";
import ina from "./config/in";

export default function App() {
  const [lang, setLang] = useState("en");
  const [lg, setLg] = useState(en);

  useEffect(() => {
    if (lang === "en") {
      setLg(en);
    } else if (lang === "in") {
      setLg(ina);
    }
  }, [lang]);

  return (
    <div className="flex-container">
      <div className="row" style={{ background: "white" }}>
        <LeftSection lg={lg} lang={lang} />
        <RightSection lg={lg} lang={lang} setLang={setLang} />
      </div>
      <Copyright lg={lg} />
    </div>
  );
}
