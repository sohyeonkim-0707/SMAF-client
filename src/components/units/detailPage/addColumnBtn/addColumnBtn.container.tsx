import DetailWriteBtnHTML from "./addColumnBtn.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_PROCESS_CATEGORY } from "../detailPage.querys";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FETCH_PROCESS_CATEGORIES } from "./addColumnbtn.querys";
import { triger } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
export default function AddColumnBtn(props: any) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState<string>();


  const [, setDataTriger] = useRecoilState(triger);
  const onToggleModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const [createCategory] = useMutation(CREATE_PROCESS_CATEGORY);
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });

  // 에러 모달
    const onClickErrorModal = () => {
        setErrorAlertModal(false);
    };

  const CreateProjectCategory = async (data: any) => {
    try {
      await createCategory({
        variables: {
          processName: data.processName,
          projectId: props.projectId,
        },
        refetchQueries: [
          {
            query: FETCH_PROCESS_CATEGORIES,
            variables: {
              projectId: props.projectId,
            },
          },
        ],
      });
      onToggleModal();
    } catch (error:any) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };

  return (
    <DetailWriteBtnHTML
      CreateProjectCategory={CreateProjectCategory}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      reset={reset}
      onClickErrorModal={onClickErrorModal}
      errorAlertModal={errorAlertModal}
      modalContents={modalContents}
    />
  );
}
