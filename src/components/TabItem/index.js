import { TabElement, TabButton } from "./styledComponent";

const TabItem = (props) => {
  const { isActive, setActiveTabId, tabDetails } = props;
  const { tabId, displayText } = tabDetails;

  const onClickTab = () => {
    setActiveTabId(tabId);
  };

  return (
    <TabElement className="tab-item">
      <TabButton type="button" onClick={onClickTab} isActive={isActive}>
        {displayText}
      </TabButton>
    </TabElement>
  );
};

export default TabItem;
