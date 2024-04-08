import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  FcBullish,
  FcCalendar,
  FcDepartment,
  FcDiploma2,
  FcLike,
  FcManager,
} from "react-icons/fc";
import useCreateAward from "../../Hooks/CustomAwardHooks/useCreatAward";
import useUpdateAward from "../../Hooks/CustomAwardHooks/useUpdateAward";

const AwardModalBody = ({
  updateClicked,
  setUpdateClicked,
  setCreateClicked,
  createClicked,
  AwardState,
}) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const { createAward } = useCreateAward();
  const { updateAward } = useUpdateAward();
  const user = JSON.parse(localStorage.getItem("user"));
  const [award, setAward] = useState({
    userId: user?.userId,
    role: "",
    companyOrInstitute: "",
    certification: "",
    grade: "",
    dateReceived: "",
    description: "",
  });

  useEffect(() => {
    if (AwardState) {
      setAward({
        userId: AwardState?.userId || user?.userId || "",
        role: AwardState?.role || "",
        companyOrInstitute: AwardState?.companyOrInstitute || "",
        certification: AwardState?.certification || "",
        grade: AwardState?.grade || "",
        dateReceived: AwardState.dateReceived
          ? new Date(AwardState.dateReceived).toISOString().slice(0, 16)
          : "",

        description: AwardState?.description || "",
      });
    }
  }, [AwardState]);

  useEffect(() => {
    if (updateClicked) {
      updateAward(award, AwardState?._id);
      setUpdateClicked(false);
    }
  }, [updateClicked]);
  useEffect(() => {
    if (createClicked) {
      createAward(award);
      setCreateClicked(false);
    }
  }, [createClicked]);
  return (
    <div className="flex flex-col justify-start lg:px-2 capitalize sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-[10px]  text-[grey]">
          ( * ) indicates Required
        </span>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">role*</span>
        <InputGroup size="sm">
          <InputLeftAddon fontWeight="500" color="black">
            <FcManager />
          </InputLeftAddon>
          <Input
            size="sm"
            value={award.role}
            onChange={(e) =>
              setAward((prev) => ({ ...prev, role: e.target.value }))
            }
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Software Enginnering"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Company/Institution*</span>
        <InputGroup size="sm">
          <InputLeftAddon fontWeight="500" color="black">
            <FcDepartment />
          </InputLeftAddon>
          <Input
            size="sm"
            value={award.companyOrInstitute}
            onChange={(e) =>
              setAward((prev) => ({
                ...prev,
                companyOrInstitute: e.target.value,
              }))
            }
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Amazon"
          />
        </InputGroup>
      </div>
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Certification*</span>
        <InputGroup size="sm">
          <InputLeftAddon fontWeight="500" color="black">
            <FcDiploma2 />
          </InputLeftAddon>
          <Input
            size="sm"
            value={award.certification}
            onChange={(e) =>
              setAward((prev) => ({ ...prev, certification: e.target.value }))
            }
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Full Stack Development"
          />
        </InputGroup>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Receiving Year*</span>
          <InputGroup size="sm">
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              textTransform="uppercase"
              name="date Received"
              value={award.dateReceived}
              onChange={(e) =>
                setAward((prevState) => ({
                  ...prevState,
                  dateReceived: e.target.value,
                }))
              }
              focusBorderColor={currentPalette.primary}
              placeholder="Select Date and Time"
              size="sm"
              type="datetime-local"
            />
          </InputGroup>
        </div>

        <div className="flex flex-col  items">
          <span className="text-[10px]  font-bold">Grade* </span>
          <InputGroup size="sm">
            <InputLeftAddon color="black">
              <FcBullish />
            </InputLeftAddon>
            <Input
              size="sm"
              textTransform="uppercase"
              variant="outline"
              value={award.grade.substring(0, 2)}
              onChange={(e) =>
                setAward((prev) => ({
                  ...prev,
                  grade: e.target.value,
                }))
              }
              focusBorderColor={currentPalette.secondary}
              placeholder="e.g. A"
            />
          </InputGroup>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">
          Description{" "}
          <span
            className={`font-semibold ${
              award.description.length > 699 && "text-red-500"
            }`}
          >
            {award.description.length}/700
          </span>
        </span>
        <Textarea
          value={award.description}
          onChange={(e) =>
            setAward((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          focusBorderColor={currentPalette.secondary}
          placeholder="Add some details, experience, achivements etc."
        />
      </div>
      <div className="flex gap-1 items-center justify-center">
        <FcLike /> <span>thanks for your time...</span>
      </div>
    </div>
  );
};

export default AwardModalBody;
