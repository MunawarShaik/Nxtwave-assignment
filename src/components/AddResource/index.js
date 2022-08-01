import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
// import Cookies from "js-cookie";
import { BiChevronLeft } from "react-icons/bi";
import { BiUpload } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MainContainer,
  ButtonEl,
  ButtonContainer,
  DetailsContainer,
  InnerContainer,
  ImageContainer,
  FormEl,
  Heading,
  LabelEl,
  TextArea,
  InputContainer,
  LogoContainer,
  LogoImg,
  IconDiv,
  LogoAndIconDiv,
  CreateBtn,
  PreviewImage,
} from "./styledComponent";
import { InputEl } from "../Home/styledComponents";

class AddResource extends Component {
  state = {
    username: "",
    link:
      "https://res.cloudinary.com/deodlm2m0/image/upload/v1659265463/image_9_q9jvp4.png",
    description: "",
  };

  showToast = () => {
    toast("Submit Success", {
      position: "top-center",
    });
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangeUserLink = (event) => {
    this.setState({ link: event.target.value });
  };

  onChangeUserDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  OnSubmitForm = async (e) => {
    e.preventDefault();

    const { username, link, description } = this.state;
    const UserDetails = { username, link, description };
    const options = { method: "POST", body: JSON.stringify(UserDetails) };
    const response = await toast.promise(
      fetch(
        " https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        options
      ),
      {
        pending: "Promise is pending",
        success: "Promise resolved 👌",
        error: "Promise rejected 🤯",
      }
    );
    console.log(response);
  };

  render() {
    const { username, link, description } = this.state;
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

            <FormEl onSubmit={this.OnSubmitForm}>
              <Heading>Add a Resource</Heading>
              <LabelEl htmlFor="name">Name</LabelEl>
              <InputContainer>
                <InputEl
                  type="text"
                  id="name"
                  value={username}
                  onChange={this.onChangeUsername}
                  placeholder="Name"
                />
              </InputContainer>
              <LabelEl htmlFor="link">Link</LabelEl>
              <InputContainer>
                <InputEl
                  type="text"
                  id="link"
                  value={link}
                  onChange={this.onChangeUserLink}
                  placeholder="Link"
                />
              </InputContainer>
              <LabelEl htmlFor="description">Description</LabelEl>
              <InputContainer>
                <TextArea
                  value={description}
                  placeholder="description"
                  onChange={this.onChangeUserDescription}
                />
              </InputContainer>
              <LogoAndIconDiv>
                <LogoContainer>
                  <LogoImg src="https://res.cloudinary.com/deodlm2m0/image/upload/v1659260871/logo_wlxb7f.png" />
                </LogoContainer>
                <IconDiv>
                  <BiUpload size={22} /> Change Photo
                </IconDiv>
              </LogoAndIconDiv>

              <CreateBtn type="submit" onClick={this.functionThatReturnPromise}>
                Create
              </CreateBtn>
            </FormEl>
          </DetailsContainer>

          <ImageContainer>
            <PreviewImage src={link} />
          </ImageContainer>
        </InnerContainer>
        <ToastContainer position="bottom-center" />
      </MainContainer>
    );
  }
}

export default AddResource;
