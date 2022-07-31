import styled from "styled-components";

export const CardItemEl = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 160px;
  width: 240px;
  left: 0px;
  top: 0px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  background-color: #ffffff;
`;
export const LogoAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const Title = styled.p`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 500;
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
`;
export const Service = styled.p`
  ont-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  margin-top: 0px;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`;
export const TitleEL = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Para = styled.p`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
`;

export const LinkEl = styled.a`
  text-decoration: none;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
`;
export const LogoEL = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 44px;
  width: 44px;
  left: 0px;
  top: 0px;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
`;
