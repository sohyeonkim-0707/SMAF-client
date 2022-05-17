import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const UserPhoto = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: 2px solid white;
  @media ${breakPoints.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

interface IUserPhoto {
  src: string | undefined;
}

export default function Image02(props: IUserPhoto) {
  return (
    <>
      <UserPhoto src={props.src}></UserPhoto>
    </>
  );
}