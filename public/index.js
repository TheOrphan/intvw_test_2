import { useEffect } from "react";
import styled from "styled-components";

const ProfileComponent = styled.div`
  height: 100vh;
  background: #00000078;
  color: white;
`;

const ProfileIMG = styled.div`
  background-image: url(./images/mypic.png);
  background-position-x: left;
  background-position-y: 71px;
  position: absolute;
  bottom: 0;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  height: 100%;
  width: 100%;
`;

const DialogCloud = styled.div`
  font-weight: 200;
  position: absolute;
  font-size: 3em;
  line-height: 1.2em;
  right: 0;
  bottom: 2em;
  color: white;
  padding: 0rem 1.9rem 0 1rem;
  min-width: 50%;
  max-width: 80vw;
`;

function Profile() {
  useEffect(() => {}, []);

  return (
    <ProfileComponent>
      <div
        style={{
          padding: "5rem 3.5rem 1rem",
        }}
      >
        <DialogCloud className="montserrat">
          <span style={{ fontSize: "0.7em" }}>Hi, You!</span>
          <br />
          <span style={{ fontSize: "0.7em" }}>
            My parents gave me a beautiful pray and its call
          </span>
          <br />
          Joko Santoso
          <br />
          <span style={{ fontSize: "0.7em" }}>
            They said it's mean "Man with Eternal Happily Life"
            <br />
            I'm an Indonesia{" "}
          </span>
          Frontend Developer{" "}
          <span style={{ fontSize: "0.7em" }}>
            in Jakarta.
            <br />
            Currently,{" "}
          </span>
          I'm Open for New Challenges.
        </DialogCloud>
        <ProfileIMG />
      </div>
    </ProfileComponent>
  );
}

export default Profile;
