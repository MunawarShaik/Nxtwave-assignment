import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //background-color: blue;
  height: 100%;
  width: 1280px;
`;
export const TabsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  margin-top: 32px;
`;
export const InputAndCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 90vh;
  width: 80%;
  margin-left: 40px;
  //background-color: orange;
  margin-right: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 648px;
  left: 149px;
  top: 190px;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  padding: 6px;
  align-self: flex-start;
  background-color: white;
`;

export const InputEl = styled.input`
  color: rgba(126, 133, 142, 0.6);
  font-size: 14px;
  height: 30px;
  font-weight: 500;
  border: none;
  outline: none;
  padding-left: 10px;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
`;

export const FailureHeading = styled.div`
  color: #171f46;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
`;
export const FailurePara = styled.div`
  text-align: center;
  color: #64748b;
  font-family: "Roboto";
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`;
