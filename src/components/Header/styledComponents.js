import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 30px;
  width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 0px;
  background: #ffffff;
  border-bottom: 1px solid #d7dfe9;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonAndProfile = styled.div`
  display: flex;
`;

export const LogoImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 40px;
  width: 82px;
  left: 48px;
  top: 16px;
  border-radius: 0px;
`;

export const Button = styled.button`
  background-color: #0b69ff;
  align-self: auto;
  border-radius: 4px;
  color: white;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100px;
  margin-right: 10px;
`;

export const ProfileImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 40px;
  align-self: auto;
  margin-left: 10px;
  border-radius: 50%;
  @media (max-width: 576px) {
    width: 100px;
    height: 30px;
  }
`;
