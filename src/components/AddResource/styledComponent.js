import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f5f5;
  height: 100%;
  width: 1280px;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  height: 100%;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  // background-color: orange;
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
export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  padding: 20px;
  // background-color: skyblue;
  border-radius: 8px;
  width: 80%;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 600px;
  height: 100%;
`;
export const Heading = styled.h1`
  height: 40px;
  width: 233px;
  left: 240px;
  top: 258px;
`;

export const LabelEl = styled.label`
  font-font: size 14px;
  align-self: flex-start;
  margin-top: 20px;
  margin-bottom: 0px;
`;
export const InputContainer = styled.div`
  align-self: flex-start;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 20px;
  border: 1px solid #d7dfe9;
  background-color: white;
  width: 100%;
`;
export const InputEl = styled.input`
  align-self: flex-start;
  height: 40px;
  width: 320px;
  border-radius: 2px;
`;
export const TextArea = styled.textarea`
  align-self: flex-start;
  border: none;
  outline: none;
`;

export const LogoContainer = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  text-align: center;
  background: #ffffff;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
`;
export const LogoImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 30px;
  align-self: center;
  width: 30px;
`;
export const LogoAndIconDiv = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

export const IconDiv = styled.div`
  text-align: center;
  font-size: 16px;
  align-items: center;
  margin-left: 10px;
`;
export const CreateBtn = styled.button`
  background-color: #0b69ff;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  outline: none;
  border: none;
  height: 40px;
  width: 120px;
  font-size: 14px;
`;
export const PreviewImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 100vh;
  background-size: cover;
  align-self: center;
  width: 100%;
`;
