import styled from "styled-components";

const Dropdown = styled.div`
  float: right;
  margin: 1rem 10px 0px 10px;
  border: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 13px;
  &::after {
    content: "";
    margin: 0px 0px 2px 7px;
    border: solid black;
    border-width: 0 2px 2px 0;
    border-radius: 0 0px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  & .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 50px;
    box-shadow: -2px 5px 20px 0px #b7b7b7;
    padding: 7px 16px;
    z-index: 1;
    margin-right: -4px;
    & div:hover {
      background-color: #f1f1f1;
    }
  }
  &:hover .dropdown-content {
    right: 0;
    display: block;
  }
`;

export default Dropdown
