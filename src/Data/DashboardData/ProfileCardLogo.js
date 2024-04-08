import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import {
  FcApproval,
  FcTodoList,
  FcAddImage,
  FcBusiness,
  FcDiploma1,
  FcGraduationCap,
  FcManager,
  FcHome,
} from "react-icons/fc";
import {
  IoIosMale,
  IoIosHappy,
  IoIosFemale,
  IoIosTransgender,
} from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
const ProfileCardLogos = {
  call: <IoCallOutline />,
  location: <IoLocationOutline className="font-bold" />,
  email: <IoMailOutline />,
  edit: <FaRegEdit />,
  add: <FcTodoList />,
  post: <FcAddImage />,
  male: <IoIosMale className="font-bold" />,
  female: <IoIosFemale className="font-bold" />,
  other: <IoIosTransgender className="font-bold" />,
  intrest: <IoIosHappy />,
};

export const ProfileLinkLogo = [
  {
    name: "dash",
    logo: <FcHome />,
  },

  {
    name: "personal",
    logo: <FcManager />,
  },

  {
    name: "experience",
    logo: <FcBusiness />,
  },

  {
    name: "achivements",
    logo: <FcDiploma1 />,
  },
  {
    name: "projects",
    logo: <FcApproval />,
  },
  {
    name: "education",
    logo: <FcGraduationCap />,
  },
];

export default ProfileCardLogos;
