import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: blue;
  height: 100vh;
  width: 1280px;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  height: 100vh;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: orange;
  align-self: flex-start;
  height: 100%;
  width: 50%;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  align-self: flex-end;
  height: 100%;
  width: 50%;
`;

export const ImageEl = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 40px;
  width: 82px;
  left: 48px;
  top: 16px;
  border-radius: 0px;
`;
export const ButtonContainer = styled.div`
  background-color: transparent;
  display: flex;
  outline: none;
  border: none;
  height: 40px;
  width: 120px;
  text-align: center;
  align-self: flex-start;
  font-size: 14px;
`;
export const ButtonEl = styled.button`
  background-color: transparent;
  color: black;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  height: 40px;
  width: 120px;
  text-align: center;
  align-self: flex-start;
  font-size: 14px;
`;
