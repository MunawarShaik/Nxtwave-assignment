import styled from "styled-components";

export const TabElement = styled.li`
  list-style-type: none;
`;
export const TabButton = styled.button`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#171F46")};
  font-family: "HK Grotesk";
  font-style: normal;
  font-size: 14px;
  line-height: height 24px;
  height: 40px;
  width: 200px;
  left: 420px;
  top: 118px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) =>
    props.isActive ? "#0B69FF" : "rgba(215, 223, 233, 0.24)"};
  outline: none;
  border: ${(props) => (props.isActive ? "1px solid #D7DFE9" : "#D7DFE9")};
  cursor: pointer;
`;
