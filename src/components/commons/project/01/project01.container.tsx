import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ImageCircle from "../../images/imagecircle/01/imagecircle.container";
import * as S from "./project01.styles";

interface IUserProject {
  el?: any;
  onClick: (event: any) => void;
}
export default function Project01(props: IUserProject) {
  const router = useRouter();
  const [dday, setDday] = useState(0);

  const onClickToDetail = (event: any) => {
    router.push(`/project/${event.currentTarget.id}`);
  };

  // 마감 디데이
  const Dday = () => {
    const startDate = new Date();
    const endDate = new Date(props.el?.project.endDate.slice(0, 10));
    // console.log(startDate);
    // console.log(endDate);
    const day = startDate.getTime() - endDate.getTime();

    const dday = Math.trunc(Math.abs(day / (1000 * 3600 * 24)));
    setDday(dday);
  };

  useEffect(() => {
    Dday();
  });

  return (
    <S.card onClick={onClickToDetail} id={props.el.project.projectId}>
      <S.Container>
        <S.box1>
          {props.el?.project.projectImageURL ? (
            <S.ImgBox src={props.el?.project.projectImageURL}></S.ImgBox>
          ) : (
            <S.ImgBox src="/images/noimage.png"></S.ImgBox>
          )}
          <S.TextBox>
            <S.MainTitle>{props.el?.project.projectName}</S.MainTitle>
            <S.SubTitle>{props.el?.project.projectIntro}</S.SubTitle>
          </S.TextBox>
        </S.box1>
        <S.box2>
          <ImageCircle el={props.el} id={props.el?.project.projectId} />
          <S.Title01>{props.el?.project.projectName}</S.Title01>
          <S.Title02>{props.el?.project.projectIntro}</S.Title02>
          <S.Date>마감까지 {dday}일 남았습니다.</S.Date>
        </S.box2>
      </S.Container>
    </S.card>
  );
}
