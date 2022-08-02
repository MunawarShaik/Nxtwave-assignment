import React from "react";
import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import TabItem from "../TabItem";
import CardItem from "../CardItem";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
import {
  MainContainer,
  TabsList,
  InputEl,
  InputContainer,
  CardsContainer,
  LoaderContainer,
  FailureView,
  FailureHeading,
  FailurePara,
  InputAndCardContainer,
} from "./styledComponents";
import Header from "../Header";

const tabsList = [
  { tabId: "resources", displayText: "Resources" },
  { tabId: "requests", displayText: "Requests" },
  { tabId: "users", displayText: "Users" },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Home extends Component {
  state = {
    resourcesList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: "",
    activeTabId: tabsList[0].tabId,
  };

  componentDidMount() {
    this.getResources();
  }

  getResources = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    // const { activeTabId, searchInput } = this.state;
    const apiUrl =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      // console.log(fetchedData);
      const updatedData = fetchedData.map((item) => ({
        category: item.category,
        description: item.description,
        iconUrl: item.icon_url,
        id: item.id,
        link: item.link,
        tag: item.tag,
        title: item.title,
      }));
      // console.log(updatedData);
      this.setState({
        resourcesList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  setActiveTabId = (tabId) => {
    this.setState({ activeTabId: tabId });
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  getSearchResults = () => {
    const { searchInput, resourcesList } = this.state;
    const searchResults = resourcesList.filter((each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return searchResults;
  };

  render() {
    const { activeTabId, apiStatus } = this.state;
    const searchResults = this.getSearchResults();

    const isHome = true;

    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return <Navigate to="/login" />;
    }

    return (
      <MainContainer>
        <Header isHome={isHome} />
        <TabsList>
          {tabsList.map((eachTab) => (
            <TabItem
              setActiveTabId={this.setActiveTabId}
              tabDetails={eachTab}
              key={eachTab.tabId}
              isActive={eachTab.tabId === activeTabId}
            />
          ))}
        </TabsList>
        <InputAndCardContainer>
          <InputContainer>
            <BsSearch />
            <InputEl
              type="search"
              placeholder="search"
              onChange={this.onChangeSearchInput}
            />
          </InputContainer>

          {apiStatus === apiStatusConstants.inProgress ? (
            <LoaderContainer>
              <TailSpin />
            </LoaderContainer>
          ) : null}
          {apiStatus === apiStatusConstants.success ? (
            <CardsContainer>
              {searchResults.map((each) => (
                <CardItem details={each} key={each.id} />
              ))}
            </CardsContainer>
          ) : null}
          {apiStatus === apiStatusConstants.failure ? (
            <FailureView>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
                alt="failure-error"
                className="failure-img"
              />
              <FailureHeading>Oops! Something Went Wrong</FailureHeading>
              <FailurePara>
                We are having some trouble processing your request. Please try
                again.
              </FailurePara>
            </FailureView>
          ) : null}
        </InputAndCardContainer>
      </MainContainer>
    );
  }
}

export default Home;
