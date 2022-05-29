import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  @media ${breakPoints.mobile} {
  }
`;

// 오른쪽박스
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 97rem;
  margin-left: 9rem;
  @media ${breakPoints.mobile} {
    width: 320px;
    height: 330px;
    margin: auto;
    margin-top: 60px;
    /* border: 1px solid red; */
  }
`;

// 표
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 52.8rem;
  margin-bottom: 4.4rem;
  @media ${breakPoints.mobile} {
    margin-bottom: 0rem;
  }
`;

// 결제내역
export const Title = styled.div`
  width: 11.6rem;
  height: 4.6rem;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.64rem;
  letter-spacing: -2%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PaymentMenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  padding: 12px 150px 13px 100px;
  border-radius: 16px 16px 0px 0px;
  background: #e5e5ef;
  @media ${breakPoints.mobile} {
    padding: 8px 30px;
  }
`;

// 번호
export const TableMenuNo = styled.div`
  display: flex;
  justify-content: center;
  width: 5.4rem;
  margin-right: 6rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 결제일
export const TableMenuPaymentDate = styled.div`
  display: flex;
  justify-content: center;
  width: 13.53rem;
  margin-right: 9.3rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media ${breakPoints.mobile} {
    width: 4.8rem;
    font-size: 1.2rem;
    margin-right: 6rem;
  }
`;

// 결제상품
export const TableMenuProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 5.8rem;
  margin-right: 9.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media ${breakPoints.mobile} {
    width: 5.1rem;
    margin-right: 6rem;
    font-size: 1.2rem;
  }
`;

// 결제금액
export const TableMenuMoney = styled.div`
  display: flex;
  justify-content: center;
  width: 8.52rem;
  margin-right: 13rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media ${breakPoints.mobile} {
    width: 5.1rem;
    margin-right: 0rem;
    font-size: 1.2rem;
  }
`;

// 작성일
export const TableMenuDate = styled.div`
  display: flex;
  justify-content: center;
  width: 4.4rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PaymentObjectList = styled.div`
  width: 97rem;
  height: 47rem;
  border-radius: 0 0 16px 16px;
  background-color: white;
  span {
    display: block;
    margin: 22rem auto;
    text-align: center;
    color: #505050;
  }

  @media ${breakPoints.mobile} {
    width: 32rem;
    height: 28rem;
    margin: 0rem auto;
  }
`;

export const Page = styled.div`
  margin-left: 25rem;
  @media ${breakPoints.mobile} {
    margin-left: 0rem;
  }
`;
