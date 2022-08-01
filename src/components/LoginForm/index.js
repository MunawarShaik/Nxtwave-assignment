import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MainFormContainer,
  FormContainer,
  LogoImg,
  LabelItem,
  InputItem,
  LoginBtn,
  CheckBoxContainer,
  Notice,
} from "./styledComponents";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    isShowPassword: false,
    isLoginFailed: false,
    ErrorMsg: "",
  };

  OnSubmitForm = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const UserDetails = { username, password };
    const options = { method: "POST", body: JSON.stringify(UserDetails) };
    const response = await fetch("https://apis.ccbp.in/login", options);
    const data = await response.json();
    if (response.ok) {
      const { history } = this.props;
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      history.replace("/");
    } else {
      this.setState((prevState) => ({
        isLoginFailed: !prevState.isLoginFailed,
        ErrorMsg: data.error_msg,
      }));
    }
  };

  ChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  ChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  toggleCheckBox = () => {
    this.setState((prevState) => ({
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  showToast = () => {
    toast("Login Success", {
      position: "top-center",
    });
  };

  render() {
    const {
      username,
      password,
      isShowPassword,
      isLoginFailed,
      ErrorMsg,
    } = this.state;
    const TogglePassword = isShowPassword ? "text" : "password";

    if (Cookies.get("jwt_token") !== undefined) {
      return <Navigate to="/" />;
    }
    return (
      <MainFormContainer>
        <FormContainer onSubmit={this.OnSubmitForm}>
          <LogoImg
            src="https://res.cloudinary.com/deodlm2m0/image/upload/v1659175204/NxtWave_TM_Coloured_logo_1_o0hzom.png"
            alt="website logo"
          />
          <LabelItem htmlFor="Username">USERNAME</LabelItem>
          <InputItem
            type="text"
            value={username}
            id="Username"
            placeholder="Username"
            onChange={this.ChangeUsername}
          />
          <LabelItem htmlFor="Password">PASSWORD</LabelItem>
          <InputItem
            type={TogglePassword}
            value={password}
            id="Password"
            placeholder="Password"
            onChange={this.ChangePassword}
          />
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="CheckBox"
              onChange={this.toggleCheckBox}
              margin-right="8px"
              outline="none"
            />

            <LabelItem htmlFor="CheckBox" MaiCheckboxHU>
              Show Password
            </LabelItem>
          </CheckBoxContainer>
          <LoginBtn type="submit" onClick={this.showToast}>
            Login
          </LoginBtn>
          {isLoginFailed ? <Notice>*{ErrorMsg}</Notice> : null}
        </FormContainer>
        <ToastContainer autoClose={3000} />
      </MainFormContainer>
    );
  }
}

export default LoginForm;
