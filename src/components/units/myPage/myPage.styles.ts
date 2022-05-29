import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 128rem;
  padding-top: 6rem;
  padding-bottom: 12rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    flex-direction: column;
    padding-top: 0rem;
    padding-bottom: 6rem;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 97rem;
  margin-left: 9rem;
  border-radius: 8px;
  @media ${breakPoints.mobile} {
    width: 36rem;
    padding-top: 32px;
    margin-left: 0rem;
  }
`;

export const InnerWrapper = styled.div`
  height: 30.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.6rem;
  margin-bottom: 2rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    /* background-color: blue; */
    margin-left: 0rem;
    margin-bottom: 0rem;
  }
`;

export const Title = styled.div`
  height: 100%;
  font-weight: 700;
  font-size: 3.2rem;
  @media ${breakPoints.mobile} {
    /* background-color: yellow; */
    height: 26px;
    font-size: 18px;
    line-height: 26px;
    margin-left: 20px;
  }
`;

export const AddButton = styled.button`
  width: 15.8rem;
  height: 4.6rem;
  border: none;
  border-radius: 12px;
  background: #333333;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 46px;
  outline: none;
  :hover {
    background: #6b6bff;
  }
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 150px;
    height: 26px;
    margin-right: 20px;
    color: white;
    font-size: 14px;
    line-height: 26px;
    border-radius: 8px;
  }
`;

export const DateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 8.9rem;
  height: 3.6rem;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 3.6rem;
  cursor: pointer;
  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.5rem;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 26px;
    margin-right: 20px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 26px;
  }
`;
