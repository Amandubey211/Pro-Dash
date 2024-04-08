import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  FcBullish,
  FcCalendar,
  FcDepartment,
  FcGlobe,
  FcGraduationCap,
  FcLike,
  FcReading,
} from "react-icons/fc";
import useCreateEducation from "../../Hooks/CustomEducationHooks/useCreateEducaion";
import useUpdateEducation from "../../Hooks/CustomEducationHooks/useUpdateEducation";

const EducationModalBody = ({
  updateClicked,
  setUpdateClicked,
  setCreateClicked,
  createClicked,
  eduState,
}) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const { updateEducation } = useUpdateEducation();
  const user = JSON.parse(localStorage.getItem("user"));
  const { createEducation } = useCreateEducation();
  const [education, setEducation] = useState({
    userId: user?.userId,
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    description: "",
    institutionLocation: "",
    GPA: "",
  });

  useEffect(() => {
    if (eduState) {
      setEducation({
        userId: eduState.userId || user?.userId || "",
        institution: eduState.institution || "",
        degree: eduState.degree || "",
        fieldOfStudy: eduState.fieldOfStudy || "",
        startYear: eduState.startYear || "",
        endYear: eduState.endYear || "",
        description: eduState.endYear || "",
        institutionLocation: eduState.institutionLocation || "",
        GPA: eduState.GPA || "",
      });
    }
  }, [eduState]);
  useEffect(() => {
    if (updateClicked) {
      updateEducation(education, eduState?._id);
      setUpdateClicked(false);
    }
  }, [updateClicked]);
  useEffect(() => {
    if (createClicked) {
      createEducation(education);
      setCreateClicked(false);
    }
  }, [createClicked]);

  return (
    <div className="flex flex-col justify-start lg:px-2 sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-[10px]  text-[grey]">
          ( * ) indicates Required
        </span>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Degree*</span>
        <InputGroup>
          <InputLeftAddon fontWeight="500" color="black">
            <FcGraduationCap />
          </InputLeftAddon>
          <Input
            value={education.degree}
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, degree: e.target.value }))
            }
            variant="outline"
            size="md"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.MCA"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Field of Study*</span>
        <InputGroup>
          <InputLeftAddon fontWeight="500" color="black">
            <FcReading />
          </InputLeftAddon>
          <Input
            value={education.fieldOfStudy}
            onChange={(e) =>
              setEducation((prev) => ({
                ...prev,
                fieldOfStudy: e.target.value,
              }))
            }
            variant="outline"
            size="md"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Computer Application"
          />
        </InputGroup>
      </div>
      <div className="flex gap-2 justify-between items-center ">
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Starting Year*</span>
          <InputGroup>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              variant="outline"
              value={education.startYear}
              onChange={(e) =>
                setEducation((prev) => ({ ...prev, startYear: e.target.value }))
              }
              size="md"
              focusBorderColor={currentPalette.secondary}
              placeholder=" e.g.2018"
            />
          </InputGroup>
        </div>
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Ending Year*</span>
          <InputGroup>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              variant="outline"
              value={education.endYear}
              onChange={(e) =>
                setEducation((prev) => ({ ...prev, endYear: e.target.value }))
              }
              size="md"
              focusBorderColor={currentPalette.secondary}
              placeholder=" e.g.2021"
            />
          </InputGroup>
        </div>
      </div>
      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Institution*</span>
        <InputGroup>
          <InputLeftAddon color="black">
            <FcDepartment />
          </InputLeftAddon>
          <Input
            variant="outline"
            value={education.institution}
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, institution: e.target.value }))
            }
            size="md"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Jain University"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Institution Address*</span>
        <InputGroup>
          <InputLeftAddon color="black">
            <FcGlobe />
          </InputLeftAddon>
          <Input
            variant="outline"
            value={education.institutionLocation}
            onChange={(e) =>
              setEducation((prev) => ({
                ...prev,
                institutionLocation: e.target.value,
              }))
            }
            size="md"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Mumbai/Maharashtra"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">GPA* (out of 10)</span>
        <InputGroup>
          <InputLeftAddon color="black">
            <FcBullish />
          </InputLeftAddon>
          <Input
            variant="outline"
            value={education.GPA}
            onChange={(e) =>
              setEducation((prev) => ({
                ...prev,
                GPA: e.target.value,
              }))
            }
            size="md"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g. 8.7"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">
          Description{" "}
          <span
            className={`font-semibold ${
              education.description.length > 1000 && "text-red-500"
            }`}
          >
            {education.description.length}/1000
          </span>
        </span>
        <Textarea
          value={education.description}
          onChange={(e) =>
            setEducation((prev) => ({
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

export default EducationModalBody;
