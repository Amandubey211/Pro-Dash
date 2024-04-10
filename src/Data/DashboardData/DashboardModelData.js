import { FcApproval, FcBullish, FcTodoList } from "react-icons/fc";

const DeskTopModalData = [
  {
    id: "1",
    ModalTitle: "Add a task",
    ModalLogo: <FcTodoList />,
    ModalBody: "TaskModal",
  },
  {
    id: "3",
    ModalTitle: "Add a Achivement",
    ModalLogo: <FcBullish />,
    ModalBody: "AchivementModal",
  },

  {
    id: "4",
    ModalTitle: "Add a project",
    ModalLogo: <FcApproval />,
    ModalBody: "PostModal",
  },
];

export const MobileModalData = [
  {
    id: "1",
    ModalTitle: "Add a task",
    ModalLogo: <FcTodoList />,
    ModalBody: "TaskModal",
  },
  {
    id: "3",
    ModalTitle: "Add a Achivement",
    ModalLogo: <FcBullish />,
    ModalBody: "AchivementModal",
  },
];
export default DeskTopModalData;
