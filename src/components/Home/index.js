import React from "react";
import { Component } from "react";
import { BsSearch } from "react-icons/bs";
import TabItem from "../TabItem";
import CardItem from "../CardItem";
import {
  MainContainer,
  TabsList,
  InputEl,
  InputContainer,
  CardsContainer,
  InputAndCardContainer,
} from "./styledComponents";
import Header from "../Header";

const tabsList = [
  { tabId: "RESOURCES", displayText: "Resources" },
  { tabId: "REQUESTS", displayText: "Requests" },
  { tabId: "USERS", displayText: "Users" },
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
    const { activeTabId, resourcesList } = this.state;
    const searchResults = this.getSearchResults();
    const isHome = true;
    console.log(resourcesList);
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

          <CardsContainer>
            {searchResults.map((each) => (
              <CardItem details={each} key={each.id} />
            ))}
          </CardsContainer>
        </InputAndCardContainer>
      </MainContainer>
    );
  }
}

export default Home;
