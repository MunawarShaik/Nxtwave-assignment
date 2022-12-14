import React from "react";
import "./index.css";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  HeaderContainer,
  NavContent,
  LogoImg,
  Button,
  ButtonAndProfile,
  ProfileImg,
} from "./styledComponents";

const Header = (props) => {
  const { isHome } = props;
  const RemoveUser = () => {
    Cookies.remove("jwt_token");
    <Navigate to="/login" />;
  };

  return (
    <HeaderContainer>
      <NavContent>
        <Link to="/">
          <LogoImg
            src="https://res.cloudinary.com/deodlm2m0/image/upload/v1659175204/NxtWave_TM_Coloured_logo_1_o0hzom.png"
            alt="website logo"
          />
        </Link>
        <ButtonAndProfile>
          {isHome ? (
            <Link to="add-resource">
              <Button type="button">+ ADD</Button>
            </Link>
          ) : null}
          <Link to="/login">
            <ProfileImg
              onClick={RemoveUser}
              type="button"
              src="https://res.cloudinary.com/deodlm2m0/image/upload/v1659176297/imageprofile_nt77iz.png"
              alt="profile image"
            />
          </Link>
        </ButtonAndProfile>
      </NavContent>
    </HeaderContainer>
  );
};
export default Header;
