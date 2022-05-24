import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_PROJECT,
  FETCH_PROCESS_CATEGORIES,
  DELETE_SCHEDULE,
  CREATE_SCHEDULE,
  FETCH_PROJECT_SCHEDULES_PROJECTID,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
  // UPDATE_PROCESS_CATEGORY
} from "./detailPage.querys";
import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  // const [scheduleName, setScheduleName] = useState("");
  // const [boardData, setBoardData] = useState([]);
  // const [restoreItem, setRestoreItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE);
  const [createSchedule] = useMutation(CREATE_SCHEDULE);
  // const [updateSchedule] = useMutation(UPDATE_PROCESS_CATEGORY);
  const { data: projectData } = useQuery(FETCH_PROJECT, {
    variables: {
      projectId: router.query.projectId,
    },
  });

  console.log("디테일", projectData)
  const { data: categoriesData } = useQuery(FETCH_PROCESS_CATEGORIES, {
    variables: {
      projectId: router.query.projectId,
    },
  });
  console.log(categoriesData);
  const { data: schedulesData, refetch } = useQuery(
    FETCH_PROJECT_SCHEDULES_PROJECTID,
    {
      variables: {
        projectId: router.query.projectId,
      },
    }
  );
  // useEffect(() => {
  // setBoardData(schedulesData?.fetchProjectSchedules);
  // setTitleData(boardData);
  // }, [schedulesData]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const OpenFileList = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleDragEnd = async (result: any) => {
    console.log(result, "함수 초기 결과값");
    if (!result.destination) {
      return;
    }
    // const items = [...boardData];
    console.log(schedulesData?.fetchProjectSchedules, "아이템리스트");
    const [reorderedItem] = schedulesData?.fetchProjectSchedules.filter(
      (el: any) => el.scheduleId === result.draggableId
    );
    console.log(reorderedItem, "재사용할 아이템");

    if (
      reorderedItem?.processCategory?.processCategoryId ===
        result?.destination?.droppableId &&
      result?.destination.index === result?.source.index
    ) {
      return;
    }
    try {
      await deleteSchedule({
        variables: {
          scheduleId: String(result.draggableId),
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId:
                reorderedItem.processCategory.processCategoryId,
            },
          },
        ],
      });

      await createSchedule({
        variables: {
          createScheduleInput: {
            scheduleName: reorderedItem?.scheduleName,
            scheduleDate: reorderedItem?.scheduleDate,
            scheduleContents: "aaa",
            processCategoryId: result?.destination?.droppableId,
            projectId: router.query.projectId,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId: result?.destination?.droppableId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    } finally {
      refetch();
    }
  };

  return (
    <ProjectDetailPageHTML
      isOpen={isOpen}
      OpenFileList={OpenFileList}
      projectData={projectData}
      categoriesData={categoriesData}
      handleDragEnd={handleDragEnd}
      isLoading={isLoading}
    />
  );
}
