import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

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
          <ProfileImg
            src="https://res.cloudinary.com/deodlm2m0/image/upload/v1659176297/imageprofile_nt77iz.png"
            alt="profile image"
          />
        </ButtonAndProfile>
      </NavContent>
    </HeaderContainer>
  );
};
export default Header;
