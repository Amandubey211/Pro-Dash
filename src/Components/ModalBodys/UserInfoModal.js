import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import { BsCardHeading } from "react-icons/bs";
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo";
import useManagePersonalInfo from "../../Hooks/CustomUserInfoHooks/useManagePersonalInfo";
import { IoLogoLinkedin } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

const UserInfoModal = ({
  personalInfoButtonClicked,
  setPersonalInfoButtonClicked,
}) => {
  const user = useSelector((store) => store.user.userDetails);
  const { managePersonalInfo } = useManagePersonalInfo();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const PersonalInfo = useSelector((store) => store.user.userPersonalInfo);
  const [userInfo, setUserInfo] = useState({
    userId: user?.id,
    firstName: PersonalInfo.firstName || "",
    lastName: PersonalInfo?.lastName || "",
    mobNumber: PersonalInfo?.mobNumber || "",
    city: PersonalInfo?.city || "",
    email: PersonalInfo?.email || "",
    links: PersonalInfo?.links || "",
    gender: PersonalInfo?.gender || "",
    photo: PersonalInfo?.photo || "",
    headline: PersonalInfo?.headline || "",
    interests: PersonalInfo?.interests || "",
    linkedin: PersonalInfo?.linkedin || "",
    about: PersonalInfo?.about || "",
  });

  if (personalInfoButtonClicked) {
    managePersonalInfo(userInfo);
    setPersonalInfoButtonClicked(false);
  }

  return (
    <div className="flex flex-col justify-start lg:px-2 sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-[10px]  text-[grey]">
          ( * ) indicates Required
        </span>
      </div>
      <div className="flex gap-2 justify-between items-center ">
        {/* //FirstName */}
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">First Name*</span>
          <InputGroup size="sm">
            <InputLeftAddon fontWeight="500" color="black">
              FN
            </InputLeftAddon>
            <Input
              value={userInfo.firstName}
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  firstName: e.target.value,
                }))
              }
              variant="outline"
              size="sm"
              focusBorderColor={currentPalette.primary}
              placeholder="e.g.Tony"
            />
          </InputGroup>
        </div>
        {/* //Lastname */}
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Last Name*</span>
          <InputGroup size="sm">
            <InputLeftAddon fontWeight="500" color="black">
              LN
            </InputLeftAddon>
            <Input
              value={userInfo.lastName}
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  lastName: e.target.value,
                }))
              }
              variant="outline"
              size="sm"
              focusBorderColor={currentPalette.primary}
              placeholder="e.g.Stark"
            />
          </InputGroup>
        </div>
      </div>

      {/* //Headline */}
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Headline*</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">
            <BsCardHeading />
          </InputLeftAddon>
          <Input
            value={userInfo.headline}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                headline: e.target.value,
              }))
            }
            variant="outline"
            size="sm"
            focusBorderColor={currentPalette.primary}
            placeholder="e.g.Software Engineer"
          />
        </InputGroup>
      </div>
      {/* //Mobile */}
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Mobile*</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">{ProfileCardLogos.call}</InputLeftAddon>
          <Input
            value={userInfo.mobNumber}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                mobNumber: e.target.value,
              }))
            }
            variant="outline"
            size="sm"
            focusBorderColor={currentPalette.primary}
            placeholder=" e.g.7700077000"
          />
        </InputGroup>
      </div>
      {/* //Email */}
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Email*</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">
            {ProfileCardLogos.email}
          </InputLeftAddon>
          <Input
            size="sm"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            variant="outline"
            focusBorderColor={currentPalette.primary}
            placeholder="e.g.xyz@gmail.com"
          />
        </InputGroup>
      </div>

      {/* //city */}
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">City/State*</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">
            {ProfileCardLogos.location}
          </InputLeftAddon>
          <Input
            value={userInfo.city}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                city: e.target.value,
              }))
            }
            variant="outline"
            size="sm"
            focusBorderColor={currentPalette.primary}
            placeholder="e.g.Mumbai/Maharashtra"
          />
        </InputGroup>
      </div>

      {/* //Gender */}
      <RadioGroup
        name="gender"
        onChange={(val) =>
          setUserInfo((prevState) => ({ ...prevState, gender: val }))
        }
        value={userInfo.gender}
      >
        <span className="text-[10px] font-bold">Gender</span>
        <div className="flex bg- rounded-lg p-3 gap-4 items-center">
          <Radio colorScheme={currentPalette.colorScheme} value="Male">
            Male
          </Radio>
          <Radio colorScheme={currentPalette.colorScheme} value="Female">
            Female
          </Radio>
          <Radio colorScheme={currentPalette.colorScheme} value="Other">
            Other
          </Radio>
        </div>
      </RadioGroup>
      {/* //Intrests */}
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Intrests*</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">
            {ProfileCardLogos.intrest}
          </InputLeftAddon>
          <Input
            value={userInfo.interests}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                interests: e.target.value,
              }))
            }
            variant="outline"
            size="sm"
            focusBorderColor={currentPalette.primary}
            placeholder="e.g.coding,writing,gaming,meditation"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-bold">Linkedin Link</span>
        <InputGroup size="sm">
          <InputLeftAddon color="black">
            <IoLogoLinkedin />
          </InputLeftAddon>
          <Input
            value={userInfo.linkedin}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                linkedin: e.target.value,
              }))
            }
            variant="outline"
            size="sm"
            focusBorderColor={currentPalette.secondary}
            placeholder="Linkedin Profile Link"
          />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">
          About{" "}
          <span
            className={`font-semibold ${
              userInfo.about?.length > 1000 && "text-red-500"
            }`}
          >
            {userInfo.about?.length}/1000
          </span>
        </span>
        <Textarea
          value={userInfo.about}
          onChange={(e) =>
            setUserInfo((prevState) => ({
              ...prevState,
              about: e.target.value,
            }))
          }
          focusBorderColor={currentPalette.secondary}
          placeholder="Introduce yourself"
        />
      </div>

      <div className="flex gap-1 items-center justify-center">
        <FcLike /> <span>thanks for your time...</span>
      </div>
    </div>
  );
};

export default UserInfoModal;
