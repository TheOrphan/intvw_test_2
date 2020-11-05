import styled from "styled-components";

const CallUs = styled.a`
  float: right;
  margin: 8px 0;
  cursor: pointer;
  background: #ff6339;
  border-radius: 14px;
  padding: 6px 8px;
  text-align: right;
  font-size: 12px;
  color: #fefefe;
  & .phone-number {
    display: none;
  }
  &:hover .phone-number {
    transition: all 1s ease;
    display: block;
    padding-top: 8px;
  }
`;

export default CallUs
