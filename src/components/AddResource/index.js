import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { BiChevronLeft } from "react-icons/bi";
import {
  MainContainer,
  ButtonEl,
  ButtonContainer,
  DetailsContainer,
  InnerContainer,
  ImageContainer,
} from "./styledComponent";

const AddResource = () => {
  const isHome = false;
  return (
    <MainContainer>
      <Header isHome={isHome} />
      <InnerContainer>
        <DetailsContainer>
          <ButtonContainer>
            <Link to="/">
              <ButtonEl>
                <BiChevronLeft size={50} /> Users
              </ButtonEl>
            </Link>
          </ButtonContainer>
        </DetailsContainer>

        <ImageContainer></ImageContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default AddResource;
