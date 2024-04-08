import { Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FcCalendar,
  FcDepartment,
  FcEngineering,
  FcLike,
  FcManager,
} from "react-icons/fc";
import { useSelector } from "react-redux";
import useCreateExperience from "../../Hooks/CustomExperienceHooks/useCreateExperience";
import useUpdateExperience from "../../Hooks/CustomExperienceHooks/useUpdateExperience";

const ExperienceModalBody = ({
  updateClicked,
  setUpdateClicked,
  setCreateClicked,
  createClicked,
  experienceState,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [experience, setExperience] = useState({
    userId: user?.userId,
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
    skillsUsed: [],
  });
  useEffect(() => {
    if (experienceState) {
      setExperience({
        userId: experienceState.userId || user?.userId || "",
        company: experienceState.company || "",
        role: experienceState.role || "",
        startDate: experienceState.startDate
          ? new Date(experienceState.startDate).toISOString().slice(0, 16)
          : "",
        endDate: experienceState.endDate
          ? new Date(experienceState.endDate).toISOString().slice(0, 16)
          : "",

        skillsUsed: experienceState.skillsUsed || "",

        description: experienceState.description || "",
      });
    }
  }, []);
  const { createExperience } = useCreateExperience();
  const { updateExperience } = useUpdateExperience();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const handleInputChange = (key, value) => {
    if (key === "skillsUsed") {
      // Check if the input value is empty
      if (value.trim() === "") {
        setExperience((prevState) => ({
          ...prevState,
          [key]: [], // Set skillsUsed to an empty array if input is empty
        }));
      } else {
        // Split the input string into an array of skills
        let skills = value.split(",").map((skill) => skill.trim());
        // Limit the number of skills
        const maxSkills = 5; // Set your desired maximum number of skills
        skills = skills.slice(0, maxSkills);
        setExperience((prevState) => ({
          ...prevState,
          [key]: skills,
        }));
      }
    } else {
      setExperience((prevState) => ({ ...prevState, [key]: value }));
    }
  };

  useEffect(() => {
    if (createClicked) {
      createExperience(experience);
      setCreateClicked(false);
    }
  }, [createClicked]);
  useEffect(() => {
    if (updateClicked) {
      updateExperience(experience, experienceState?._id);
      setUpdateClicked(false);
    }
  }, [updateClicked]);
  return (
    <div className="flex flex-col justify-start lg:px-2 sm:px-1 gap-2">
      <div className="flex justify-between items-center ">
        <span className="text-[10px]  text-[grey]">
          ( * ) indicates Required
        </span>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Company*</span>
        <InputGroup size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}>
          <InputLeftAddon fontWeight="500" color="black">
            <FcDepartment />
          </InputLeftAddon>
          <Input
            size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}
            value={experience.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Amazon"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col  items">
        <span className="text-[10px] font-bold">Role*</span>
        <InputGroup size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}>
          <InputLeftAddon fontWeight="500" color="black">
            <FcManager />
          </InputLeftAddon>
          <Input
            size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}
            value={experience.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="e.g.Front-End Developer"
          />
        </InputGroup>
      </div>
      <div className="flex gap-2 justify-between items-center ">
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Starting Date*</span>
          <InputGroup size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}
              value={experience.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              fontSize={{
                base: "x-small",
                md: "small",
                lg: "small",
                sm: "x-small",
              }}
              textTransform="uppercase"
              name="duedate"
              focusBorderColor={currentPalette.primary}
              placeholder="Select Date and Time"
              type="datetime-local"
            />
          </InputGroup>
        </div>
        <div className="flex flex-col  items">
          <span className="text-[10px] font-bold">Ending Date*</span>
          <InputGroup size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}>
            <InputLeftAddon color="black">
              <FcCalendar />
            </InputLeftAddon>
            <Input
              size={{ base: "xs", md: "md", lg: "md", sm: "xs" }}
              value={experience.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              fontSize={{
                base: "x-small",
                md: "small",
                lg: "small",
                sm: "x-small",
              }}
              textTransform="uppercase"
              name="duedate"
              focusBorderColor={currentPalette.primary}
              placeholder="Select Date and Time"
              type="datetime-local"
            />
          </InputGroup>
        </div>
      </div>

      <div className="flex flex-col items">
        <span className="text-[10px] font-semibold text-red-300 ">
          Skills Used*(Enter skills separated by commas)
          {experience.skillsUsed.length}/5
        </span>
        <InputGroup size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}>
          <InputLeftAddon color="black">
            <FcEngineering />
          </InputLeftAddon>
          <Input
            size={{ base: "sm", md: "md", lg: "md", sm: "xs" }}
            value={
              experience.skillsUsed.length > 0 ? experience.skillsUsed : ""
            }
            onChange={(e) => handleInputChange("skillsUsed", e.target.value)}
            variant="outline"
            focusBorderColor={currentPalette.secondary}
            placeholder="eg React, Redux, Node, ChakraUi, MongoDB"
          />
        </InputGroup>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold">
          Description{" "}
          <span
            className={`font-semibold ${
              experience.description.length > 1000 && "text-red-500"
            }`}
          >
            {experience.description.length}/1000
          </span>
        </span>
        <Textarea
          value={experience.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          focusBorderColor={currentPalette.secondary}
          placeholder="Add some details, about the project, what it offers, speciality of the project, main highlight, etc."
        />
      </div>
      <div className="flex gap-1 items-center justify-center">
        <FcLike /> <span>thanks for your time...</span>
      </div>
    </div>
  );
};

export default ExperienceModalBody;
