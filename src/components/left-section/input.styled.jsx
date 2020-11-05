import styled from "styled-components";

const Inputstyled = styled.div`
  position: relative;
  padding-bottom: inherit;
  & input {
    position: inherit;
    top: 0;
    left: 0;
    background: transparent;
    direction: ltr;
    text-align: left;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    color: #202124;
    font-size: 16px;
    height: 40px;
    margin: 1px 1px 0 1px;
    padding: 13px 15px;
    z-index: 1;
    box-sizing: border-box;
    width: 80%;
    &:focus {
      outline: 0;
      border: 1px solid #38cdfe !important;
      border-radius: 4px;
    }
    &:focus + label {
      z-index: 2;
      top: -9px !important;
      left: 38px !important;
      background: white;
      color: #38cdfe;
      font-size: 14px;
      text-transform: capitalize;
      padding: 0 10px 0 5px;
    }
  }
  & label {
    position: absolute;
    left: 46px;
    top: 12px;
    color: gray;
    text-transform: capitalize;
    font-size: 14px;
    transition: all 0.5s;
  }
`;

export default Inputstyled;
